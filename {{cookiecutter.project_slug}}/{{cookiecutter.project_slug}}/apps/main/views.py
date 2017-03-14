from django.core.files.base import ContentFile
from notifications.signals import notify
from {{cookiecutter.project_slug}}.apps.main.forms import (
    CollectionForm
)

from {{cookiecutter.project_slug}}.apps.main.models import *

from {{cookiecutter.project_slug}}.apps.main.stats import (
    count_collection_annotations,
    count_task_annotations
)

from {{cookiecutter.project_slug}}.apps.main.utils import (
    filter_collection_start,
    get_annotations,
    get_collection,
    get_entity,
    get_image_base,
    get_image_basepath,
    get_user_description,
    get_user_markup,
    has_image_base,
    save_markup,
    sniff_template_extension
)

from {{cookiecutter.project_slug}}.apps.main.navigation import (
    get_next_to_markup,
    get_next_to_describe,
    get_next_to_annotate
)

from {{cookiecutter.project_slug}}.settings import (
    BASE_DIR, 
    MEDIA_ROOT
)

from {{cookiecutter.project_slug}}.apps.main.actions import (
    clear_annotations,
    update_annotations
)

from {{cookiecutter.project_slug}}.apps.users.utils import (
    get_user
)

from django.core.exceptions import PermissionDenied, ValidationError
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import messages
from django.db.models.aggregates import Count
from django.forms.models import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.http.response import (
    HttpResponseRedirect, 
    HttpResponseForbidden, 
    Http404
)

from django.shortcuts import (
    get_object_or_404, 
    render_to_response, 
    render, 
    redirect
)

from django.utils import timezone
from django.urls import reverse

import csv
import datetime
import gzip
import hashlib
from itertools import chain
import json
import os
import numpy
import pandas
import pickle
import re
import shutil
import tarfile
import tempfile
import traceback
import uuid
import zipfile

media_dir = os.path.join(BASE_DIR,MEDIA_ROOT)

###############################################################################################
# Authentication and Collection View Permissions###############################################
###############################################################################################


@login_required
def get_permissions(request,context):
    '''get_permissions returns an updated context with edit_permission and annotate_permission
    for a user. The key "collection" must be in the context
    '''
    collection = context["collection"]

    # Edit and annotate permissions?
    context["edit_permission"] = has_collection_edit_permission(request,collection)
    context["annotate_permission"] = has_collection_annotate_permission(request,collection)
    context["delete_permission"] = request.user == collection.owner
    
    # If no annotate permission, get their request
    if context["annotate_permission"] == False:
        try:
            context['membership'] = RequestMembership.objects.get(requester=request.user,
                                                                  collection=collection)
        except:
            pass
    return context


# Does a user have permissions to see a collection?

def has_delete_permission(request,collection):
    '''collection owners have delete permission'''
    if request.user == collection.owner:
        return True
    return False


def has_collection_edit_permission(request,collection):
    '''owners and contributors have edit permission'''
    if request.user == collection.owner or request.user in collection.contributors.all():
        return True
    return False


def has_collection_annotate_permission(request,collection):
    '''owner and annotators have annotate permission (not contributors)'''
    if request.user == collection.owner:
        return True
    elif request.user in collection.annotators.all():
        return True
    return False



###############################################################################################
# Contributors ################################################################################
###############################################################################################

@login_required
def edit_contributors(request,did):
    '''edit_contributors is the view to see, add, and delete contributors for a set.
    '''
    collection = get_docs_collection(did)
    if request.user == collection.owner:

        # Who are current contributors?
        contributors = collection.contributors.all()

        # Any user that isn't the owner or already a contributor can be added
        invalid_users = [x.id for x in contributors] + [request.user.id]
        contenders = [x for x in User.objects.all() if x.username != 'AnonymousUser']
        contenders = [x for x in contenders if x.id not in invalid_users]

        context = {'contributors':contributors,
                   'collection':collection,
                   'contenders':contenders}
        
        return render(request, 'docs/edit_collection_contributors.html', context)

    # Does not have permission, return to collection
    messages.info(request, "You do not have permission to perform this action.")
    return redirect('doc_collection_details',kwargs={'did':collection.id})


@login_required
def add_contributor(request,did):
    '''add a new contributor to a collection
    :param did: the collection id
    '''
    collection = get_collection(did)
    if request.user == collection.owner:
        if request.method == "POST":
            user_id = request.POST.get('user',None)
            if user_id:
                user = get_user(user_id)
                collection.contributors.add(user)
                collection.save()

                # Alert the user of the status change
                message = """You have been added as a contributor to the %s.""" %(collection.name)
                notify.send(collection.owner, recipient=user, verb=message)

                messages.success(request, 'User %s added as contributor to collection.' %(user))

    return edit_contributors(request,did)


@login_required
def remove_contributor(request,cid,uid):
    '''remove a contributor from a collection
    :param did: the collection id
    :param uid: the contributor (user) id
    '''
    collection = get_collection(cid)
    user = get_user(uid)
    contributors = collection.contributors.all()
    if request.user == collection.owner:
        if user in contributors:    
            collection.contributors = [x for x in contributors if x != user]
            collection.save()
            messages.success(request, 'User %s is no longer a contributor to the collection.' %(contributor))

    return redirect('edit_contributors',cid)



###############################################################################################
# Collections #################################################################################
###############################################################################################


# View all collections
def view_collections(request):
    has_collections = False
    collections = Collection.objects.all()
    context = {"collections":collections,
               "page_title":"Collections"}
    return render(request, 'collections/all_collections.html', context)


# Personal collections
@login_required
def my_collections(request):
    collections = Collection.objects.filter(owner=request.user)
    context = {"collections":collections,
               "page_title":"My Collections"}
    return render(request, 'collections/all_collections.html', context)


@login_required
def view_collection(request,cid):
    collection = get_collection(cid)
    entity_count = collection.entity_set.count()
    context = {"collection":collection,
               "entity_count":entity_count}

    # Get all permissions, context must have collection as key
    context = get_permissions(request,context)

    return render(request, 'collections/collection_details.html', context)

def collection_explorer(request,cid):
    collection = get_collection(cid)
    entity_count = collection.entity_set.count()
    context = {"collection":collection,
               "entity_count":entity_count,
               "nosidebar":"iloveparsnips"}

    # Get all permissions, context must have collection as key
    context = get_permissions(request,context)

    return render(request, 'collections/collection_explorer.html', context)



def collection_stats(request,cid):
    '''return basic stats (counts) for collection
    '''
    collection = get_collection(cid)
    entity_count = collection.entity_set.count()
    image_count = Image.objects.filter(entity__collection=collection).count()
    text_count = Text.objects.filter(entity__collection=collection).count()
    counts = count_collection_annotations(collection)
    context = {"collection":collection,
               "entity_count":entity_count,
               "image_count":image_count,
               "text_count":text_count,
               "counts":counts,
               "nosidebar":"iloveparsnips"}

    return render(request, 'collections/collection_stats.html', context)


def collection_stats_detail(request,cid,fieldtype):
    '''return detailed stats (counts) for collection fieldtype
    '''
    collection = get_collection(cid)
    entity_count = collection.entity_set.count()
    image_count = Image.objects.filter(entity__collection=collection).count()
    text_count = Text.objects.filter(entity__collection=collection).count()
    counts = count_task_annotations(collection,fieldtype)
    if counts != None:
        context = {"collection":collection,
                   "fieldtype":fieldtype,
                   "entity_count":entity_count,
                   "image_count":image_count,
                   "text_count":text_count,
                   "counts":counts,
                   "nosidebar":"iloveparsnips"}
        return render(request, 'collections/collection_stats_detail.html', context)
    messages.info(request,"collection %s does not have any counts for task %s" %(collection.name,fieldtype))
    return redirect('collection_stats',cid=cid)



@login_required
def view_entity(request,eid):
    entity = get_entity(eid)

    context = {"entity":entity,
               "collection":entity.collection}

    # Get all permissions, context must have collection as key
    context = get_permissions(request,context)

    return render(request, 'entities/entity_details.html', context)
    

# Edit collection
@login_required
def edit_collection(request, cid=None):
    '''edit_collection is the view to edit an existing collection, or 
    generate a new one, in the case that cid is not provided.
    :param cid: the collection id
    '''

    # If a cid is provided, we are editing an existing collection
    if cid:
        collection = get_collection(cid)
    else:
        collection = Collection(owner=request.user)
        if request.method == "POST":
            form = CollectionForm(request.POST,instance=collection)
            if form.is_valid():
 
                # Update annotators and contributors
                previous_contribs = set()
                previous_annots = set()
                if form.instance.id is not None:
                    previous_contribs = set(form.instance.contributors.all())
                    previous_annots = set(form.instance.annotators.all())

                collection = form.save(commit=False)
                collection.save()

                form.save_m2m()  # save contributors

            return HttpResponseRedirect(collection.get_absolute_url())
        else:
            form = CollectionForm(instance=collection)

        edit_permission = has_collection_edit_permission(request,collection)
        context = {"form": form,
                   "edit_permission": edit_permission}

        return render(request, "collections/edit_collection.html", context)

    # If user makes it down here, does not have permission
    #messages.info(request, "You don't have permission to edit this collection.")
    return redirect("collections")


# Edit collection
@login_required
def edit_collection(request, cid=None):
    '''edit_collection is the view to edit an existing collection, or 
    generate a new one, in the case that cid is not provided.
    :param cid: the collection id
    '''
    # If a cid is provided, we are editing an existing collection
    if cid:
        collection = get_collection(cid)
    else:
        collection = Collection(owner=request.user)

    # Only owners allowed to edit collections
    if request.user != collection.owner:
        messages.info(request, "You don't have permission to edit this collection.")
        return redirect("collections")
        
    if request.method == "POST":
        form = CollectionForm(request.POST,instance=collection)
        if form.is_valid():
 
            # Update annotators and contributors
            previous_contribs = set()
            if form.instance.id is not None:
                previous_contribs = set(form.instance.contributors.all())
            collection = form.save(commit=False)
            collection.save()

            form.save_m2m()  # save contributors

        messages.info(request,"Collection information updated.")
        return HttpResponseRedirect(collection.get_absolute_url())
    
    form = CollectionForm(instance=collection)
    edit_permission = has_collection_edit_permission(request,collection)
    context = {"form": form,
               "collection":collection,
               "edit_permission": edit_permission}

    return render(request, "collections/edit_collection.html", context)


@login_required
def delete_collection(request,cid):
    '''delete_collection will delete a collection.
    '''
    collection = get_collection(cid)

    if request.user == collection.owner:
        collection.delete()
        messages.info(request,"Collection successfully deleted.")
    else:                
        messages.info(request, "You do not have permission to perform this action.")
        return HttpResponseRedirect(collection.get_absolute_url())
    return redirect('collections')


@login_required
def delete_collection_entities(request,cid):
    '''delete_collection will delete a collection.
    '''
    collection = get_collection(cid)

    if request.user == collection.owner:
        [e.delete() for e in collection.entity_set.all()]
        messages.info(request,"Collection entities successfully deleted.")
    else:                
        messages.info(request, "You do not have permission to perform this action.")
    return HttpResponseRedirect(collection.get_absolute_url())


######################################################################################
# Annotation Labels
######################################################################################

def view_label(request,cid):
    '''view_label is a general template to return a view of labels
    '''
    collection = get_collection(cid)

    # Labels associated with collection
    collection_labels = collection.allowed_annotations.all()
    labels = [x for x in Annotation.objects.all() if x not in collection_labels]

    context = {'labels':labels,
               'collection':collection,
               'collection_labels':collection_labels}

    # send back json response success
    return render(request,'collections/new_collection_label.html', context)


@login_required
def create_label(request,cid,lid=None):
    '''create_label will allow a user to create a new label to be associated with a collection. The user
    will be able to select from other collection labels
    :param cid: the collection id to associate the label with (not required, but no url accessible for it) 
    :param lid: if provided on a post, the label will be added to the collection as an allowed annotation
    '''
    collection = get_collection(cid)

    if request.method == "POST":
        if request.user == collection.owner:

            # If lid is defined, we are adding an already existing annotation label to collection
            if lid != None:
                try:
                    allowed_annotation = Annotation.objects.get(id=lid)
                    collection.allowed_annotations.add(allowed_annotation)
                    collection.save()
                    label_name = "%s:%s" %(allowed_annotation.name,
                                           allowed_annotation.label)
                    response_text = {"result": "New annotation label %s added successfully." %(label_name)}
                except BaseException as e:
                    response_text = {"error": "Error retrieving allowed annotation %s, %s" %(lid,e.message)}
                return JsonResponse(response_text)

            # The user wants a new one
            else:
                name = request.POST.get('annotation_name', None)
                if name != None:
                    for key in request.POST.keys():
                        if re.search('annotation_label',key):
                            new_label = request.POST.get(key)
                            allowed_annot,created = Annotation.objects.get_or_create(name=name,
                                                                                     label=new_label)                       
                            if created == True:
                                allowed_annot.save()
                            collection.allowed_annotations.add(allowed_annot)

                    messages.info(request,"Label generation successful.")
                else:
                    messages.info(request,"An annotation name is required.")
        else:                
            messages.info(request, "You do not have permission to perform this action.")
            return HttpResponseRedirect(collection.get_absolute_url())

    return redirect('view_label',cid=cid)


@login_required
def remove_label(request,cid,lid):
    '''remove_label will remove a label from a collection.
    :param cid: the collection id to associate the label with (not required, but no url accessible for it) 
    :param lid: if provided on a post, the label will be added to the collection as an allowed annotation
    '''
    collection = get_collection(cid)

    if request.user == collection.owner:
        allowed_annotation = Annotation.objects.get(id=lid)
        collection.allowed_annotations.remove(allowed_annotation)
        collection.save()
        messages.info(request,"Label removed successfully.")
    else:                
        messages.info(request, "You do not have permission to perform this action.")
        return HttpResponseRedirect(collection.get_absolute_url())
    return redirect('view_label',cid=cid)




######################################################################################
# Images #############################################################################
######################################################################################

# Markup

@login_required
def collection_markup_image(request,cid):
    '''collection_markup_image will return a new image to markup
    '''
    collection = get_collection(cid)
    if collection.has_images():
        next_image = get_next_to_markup(user=request.user,collection=collection)
        if next_image == None:
            messages.info(request,"You have finished marking up the images in this collection. Awesome!") 
            return HttpResponseRedirect(collection.get_absolute_url())

        # Has the user marked up the image previously?
        markup = get_user_markup(next_image,request.user)

        # Has the image base been saved?
        missing_base = not has_image_base(next_image)

        # Pass to view if we need to save a base for the image
        context = {"entity": next_image.entity,
                   "image": next_image,
                   "markup": markup,
                   "collection":collection,
                   "missing_base":missing_base,
                   "nosidebar":"harrypottah"}

        template_type = sniff_template_extension(next_image.original.path)
        return render(request, "annotate/images_markup_%s.html" %(template_type), context)

    messages.info(request,"This collection does not have any images to markup.")
    return HttpResponseRedirect(collection.get_absolute_url())


@login_required
def markup_image(request,cid,uid):
    '''markup_image will return a (free hand) annotator to markup an image.
    It is assumed that we have already chosen the image for the collection,
    and we will redirect back to the route to choose an image.
    '''

    image = Image.objects.get(id=uid)

    # If it's a post, save the markup
    if request.method == "POST": 

        # Retrieve base64 encoded data
        png_data = request.POST.get('pngdata',None)
        base_data = request.POST.get('pngdatabase',None)
        uid = request.POST.get('image_id',None)
        #image = Image.objects.get(id=uid)

        if png_data:
            markup,created = ImageMarkup.objects.get_or_create(creator=request.user,image=image)

            # The interface will send the base image if being annotated for first time
            if base_data not in [None,'']:
                markup = save_markup(markup=markup,overlay=png_data,base=base_data)

            # Otherwise, try to retrieve the already existing image
            else:
                base_image = get_image_base(image)
                markup = save_markup(markup=markup,overlay=png_data)
                markup.base = base_image
            markup.save()

        else:
            messages.info(request, "No markup detected. Did you annotate the image?")

    return redirect("collection_markup_image", cid=cid)


# Describe

@login_required
def collection_describe_image(request,cid):
    '''collection_describe_image will return a new image to describe
    '''
    collection = get_collection(cid)
    if collection.has_images():
        next_image = get_next_to_describe(user=request.user,collection=collection)
        if next_image == None:
            messages.info(request,"You have finished describing images in this collection. Great work!") 
            return HttpResponseRedirect(collection.get_absolute_url())

        description = get_user_description(request.user,next_image)
    
        # Pass to view if we need to save a base for the image
        context = {"entity":next_image.entity,
                   "image": next_image,
                   "collection":collection,
                   "description": description,
                   "nosidebar":"pancakes"}
    
        template_type = sniff_template_extension(next_image.original.path)
        return render(request, "annotate/images_description_%s.html" %(template_type), context)

    messages.info(request,"This collection does not have any images to describe.")
    return HttpResponseRedirect(collection.get_absolute_url())


@login_required
def describe_image(request,uid):
    '''describe_image will return a static view of an image to describe.
    :param eid: the entity id that the image belongs to.
    '''
    image = Image.objects.get(id=uid)
    collection = image.entity.collection

    # If it's a post, save the markup
    if request.method == "POST": 

        # Retrieve base64 encoded data
        description_text = request.POST.get('description',None)

        if description_text not in [None,'']:
            description,created = ImageDescription.objects.get_or_create(creator=request.user,
                                                                         image=image,
                                                                         description=description_text)
            description.save()

    return redirect("collection_describe_image", cid=collection.id)


# Annotate

@login_required
def collection_annotate_image(request,cid):
    '''annotate_image is the view for an image annotation interface for a particular report id
    '''
    collection = get_collection(cid)
    if collection.has_images():

        next_image = get_next_to_annotate(request.user,collection)
        if next_image == None:
            messages.info(request,"You have finished annotating the images in this collection. Woot!") 
            return HttpResponseRedirect(collection.get_absolute_url())

        annotations = get_annotations(request.user,next_image)
        allowed_annotations = collection.get_annotations()

        context = { "entity": next_image.entity,
                    "image": next_image,
                    "collection":collection,
                    "annotations": annotations['labels'],
                    "counts": annotations['counts'],
                    "nosidebar":"pizzapizza",
                    "allowed_annotations": allowed_annotations }

        template_type = sniff_template_extension(next_image.original.path)
        return render(request, "annotate/images_annotate_%s.html" %(template_type), context)

    messages.info(request,"This collection does not have any images to annotate.")
    return redirect('collection_details',cid=cid)




@login_required
def clear_image_annotations(request,uid):
    '''clear all annotations for a specific image'''

    image = Image.objects.get(id=uid)
    return clear_annotations(request,image)


@login_required
def update_image_annotation(request,uid):
    '''update_image_annotation is the view to update an annotation when it changes. 
    It should return a JSON response.
    '''
    image = Image.objects.get(id=uid)
    return update_annotations(request,instance=image)


######################################################################################
# Text ###############################################################################
######################################################################################

@login_required
def collection_markup_text(request,cid):
    '''collection_markup_text will return a new text to markup
    '''
    collection = get_collection(cid)
    if collection.has_text():
        next_text = get_next_to_markup(user=request.user,
                                       collection=collection,
                                       get_images=False)
 
        if next_text == None:
            messages.info(request,"You have finished marking up the text in this collection. Shaaawing!") 
            return redirect('collection_details',cid=cid)

        # Has the user marked up the image previously?
        markup = get_user_markup(next_text,request.user)

        # Pass to view if we need to save a base for the image
        context = {"entity": next_text.entity,
                   "text": next_text,
                   "markup": markup,
                   "nosidebar":"ronweesley!",
                   "collection":collection}

        return render(request, "annotate/text_markup.html", context)

    messages.info(request,"This collection does not have any text to markup.")
    return redirect('collection_details',cid=cid)



@login_required
def markup_text(request,cid,uid):
    '''markup_text will return a highlighter to markup a text.
    '''

    text = Text.objects.get(id=uid)

    # If it's a post, save the markup
    if request.method == "POST": 

        # Retrieve base64 encoded data
        #TODO: what are we saving here?
        uid = request.POST.get('image_id',None)

        if uid:
            markup,created = ImageMarkup.objects.get_or_create(creator=request.user,image=image)

            # The interface will send the base image if being annotated for first time
            if base_data not in [None,'']:
                markup = save_markup(markup=markup,overlay=png_data,base=base_data)

            # Otherwise, try to retrieve the already existing image
            else:
                base_image = get_image_base(image)
                markup = save_markup(markup=markup,overlay=png_data)
                markup.base = base_image
            markup.save()

        else:
            messages.info(request, "No markup detected. Did you annotate the image?")

    return redirect("collection_markup_image", cid=cid)


# Describe

@login_required
def collection_describe_text(request,cid):
    '''collection_describe_image will return a new image to describe
    '''
    collection = get_collection(cid)
    if collection.has_text():
        next_text = get_next_to_describe(user=request.user,
                                         collection=collection,
                                         get_images=False)
        if next_text == None:
            messages.info(request,"You have finished describing the text in this collection. Thanks!") 
            return redirect('collection_details',cid=cid)


        description = get_user_description(request.user,next_text)
    
        # Pass to view if we need to save a base for the image
        context = {"entity":next_text.entity,
                   "text": next_text,
                   "collection":collection,
                   "description": description,
                   "nosidebar":"pancakes"}
    
        return render(request, "annotate/text_description.html", context)

    messages.info(request,"This collection does not have any text to describe.")
    return HttpResponseRedirect(collection.get_absolute_url())



@login_required
def describe_text(request,uid):
    '''describe_text will return a static view of text to describe.
    '''
    text = Text.objects.get(id=uid)
    collection = text.entity.collection

    # If it's a post, save the markup
    if request.method == "POST": 

        # Retrieve base64 encoded data
        description_text = request.POST.get('description',None)

        if description_text not in [None,'']:
            description,created = TextDescription.objects.get_or_create(creator=request.user,
                                                                        text=text,
                                                                        description=description_text)
            description.save()

    return redirect("collection_describe_text", cid=collection.id)


# Annotate

@login_required
def collection_annotate_text(request,cid):
    '''annotate_text is the view for a text annotation interface for a particular report id
    '''
    collection = get_collection(cid)
    if collection.has_text():

        next_text = get_next_to_annotate(request.user,collection,get_images=False)
        if next_text == None:
            messages.info(request,"You have finished annotating the text in this collection. Eggcellent!") 
            return redirect('collection_details',cid=cid)


        annotations = get_annotations(request.user,next_text)
        allowed_annotations = collection.get_annotations()

        context = { "entity": next_text.entity,
                    "text": next_text,
                    "collection":collection,
                    "annotations": annotations['labels'],
                    "counts": annotations['counts'],
                    "nosidebar":"pizzapizza",
                    "allowed_annotations": allowed_annotations }

        return render(request, "annotate/text_annotate.html", context)

    messages.info(request,"This collection does not have any text to annotate.")
    return HttpResponseRedirect(collection.get_absolute_url())


@login_required
def clear_text_annotations(request,uid):
    '''clear all annotations for a specific image'''

    text = Text.objects.get(id=uid)
    return clear_annotations(request,text)


@login_required
def update_text_annotation(request,uid):
    '''update_image_annotation is the view to update an annotation when it changes. 
    It should return a JSON response.
    '''
    text = Text.objects.get(id=uid)
    return update_annotations(request,instance=text)


######################################################################################
# Annotation/Markup Portal Views #####################################################
######################################################################################


@login_required
def collection_activate(request,cid,fieldtype=None):
    '''collection activate will turn an annotation or markup view on or off, or an entire
    collection on or off.
    '''
    collection = get_collection(cid)
    if request.user == collection.owner:

        # A fieldtype indicates we are turning a specific entry on or off
        if fieldtype != None:
            if fieldtype in collection.status:
                collection.status[fieldtype]['active'] = not collection.status[fieldtype]['active']
                collection.save()
                if collection.status[fieldtype]['active'] == True:
                    status = "Active"
                else:
                    status = "Inactive"
                messages.info(request,"%s now has class %s." %(fieldtype,status))
            else:
                message.info(request,"%s is not a valid annotation or markup type for a Collection.")
    else:
        messages.info(request,"You don't have permission to perform this action.")
    return redirect('collection_start',cid=cid)
 


@login_required
def collection_start(request,cid,status=None):
    '''collection start is the primary annotation portal to show links to all annotation options
    for the collection, depending on the data present. This is also the view for the collection owner
    to make changes
    '''
    collection = get_collection(cid)
    if status == None:
        status = collection.status

    image_types = [x for x in list(status.keys()) if re.search('^image_',x)]
    text_types = [x for x in list(status.keys()) if re.search('^text_',x)]
    needs_labels = [x for x in list(status.keys()) if re.search('_annotation$',x)]

    # Update collection status based on having images/text or not.
    if collection.has_images() == False:
        for image_type in image_types:
            status[image_type]['active'] = False
    if collection.has_text() == False:
        for text_type in text_types:
            status[text_type]['active'] = False

    # We cannot annotate without labels
    if collection.allowed_annotations.count() < 1:
        for needs_label in needs_labels:
            status[needs_label]['active'] = False

    context = {"collection":collection,
               "collection_status":status,
               "image_types":image_types,
               "text_types":text_types,
               "nosidebar":"turkeybutt"}

    # Get all permissions, context must have collection as key
    context = get_permissions(request,context)

    return render(request, 'portals/collection_start.html', context)
