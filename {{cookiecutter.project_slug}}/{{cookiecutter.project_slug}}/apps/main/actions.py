# Actions are mainly ajax requests/responses to feed into views.

from django.core.files.base import ContentFile
from notifications.signals import notify

from {{cookiecutter.project_slug}}.apps.main.models import *
from {{cookiecutter.project_slug}}.apps.main.utils import (
    get_collection,
    get_entity,
    get_image,
    get_text
)

from {{cookiecutter.project_slug}}.settings import (
    BASE_DIR, 
    MEDIA_ROOT
)

from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import messages
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

import json
import os
import pickle
import re

media_dir = os.path.join(BASE_DIR,MEDIA_ROOT)


###############################################################################################
# Entities ####################################################################################
###############################################################################################

@login_required
def update_entity_status(request,eid):
    '''update_entity_status will change the status of an entity, usually from active to inactive
    or vice versa
    :param eid: the unique id of the entity to change
    '''
    entity = get_entity(eid)

    if request.user == entity.collection.owner:

        if request.method == 'POST':
            entity.active = not entity.active
            entity.save()
            response_data = {'result':'Entity changed successfully!',
                             'status':entity.active }

            return JsonResponse(response_data)
        else:
            return JsonResponse({"Unicorn poop cookies...": "I will never understand the allure."})

    return JsonResponse({"message":"You are not authorized to annotate this collection."})



###############################################################################################
# Collections #################################################################################
###############################################################################################
    

@login_required
def collection_update_instruction(request,cid):
    '''update the instruction for a particular annotation or markup task
    '''
    collection = get_collection(cid)

    if request.user == collection.owner:

        if request.method == 'POST':
            instruction = request.POST.get("instruction",None)
            fieldtype = request.POST.get("fieldtype",None)
            if instruction not in ["",None] and fieldtype in collection.status:
                collection.status[fieldtype]['instruction'] = instruction
                collection.save()
                response_data = {'result':'Instruction updated',
                                 'status': instruction }
                return JsonResponse(response_data)

    return JsonResponse({"Unicorn poop cookies...": "I will never understand the allure."})
 

def serve_image_metadata(request,uid):
    '''return image metadata as json
    '''
    image = get_image(uid)
    return JsonResponse(image.metadata)


def serve_text_metadata(request,uid):
    '''return text metadata as json
    '''
    text = get_text(uid)
    return JsonResponse(text.metadata)

def serve_text(request,uid):
    '''return raw text
    '''
    text = get_text(uid)
    return JsonResponse({"original":text.original})


###############################################################################################
# Annotations #################################################################################
###############################################################################################

def update_annotation(user,allowed_annotation,instance):
    '''update_annotation will take a user, and an annotation, some instance
    (text or image) and call the appropriate function to update it.
    :param user: the user object or user id
    :param allowed_annotation: the allowed annotation object or id
    :param instance: the Image or text instance
    '''
    if not isinstance(user,User):
        user = User.objects.get(id=user)
    if not isinstance(allowed_annotation,Annotation):
        allowed_annotation = Annotation.objects.get(id=allowed_annotation)
    if isinstance(instance,Image):
        return update_image_annotation(user,allowed_annotation,instance)
    elif isinstance(instance,Text):
        return update_text_annotation(user,allowed_annotation,instance)


def update_image_annotation(user,allowed_annotation,image):
    '''update_image_annotation is called from update_annotation given that the
    user has provided an image
    '''
    if not isinstance(image,Image):
        image = Image.objects.get(id=image)

    # Remove annotations done previously by the user for the image
    previous_annotations = ImageAnnotation.objects.filter(creator=user,
                                                          image_id=image.id,
                                                          annotation__name=allowed_annotation.name)
    annotation,created = ImageAnnotation.objects.get_or_create(creator=user,
                                                               image_id=image.id,
                                                               annotation=allowed_annotation)

    # If the annotation was just created, save it, and add report
    if created == True:
        annotation.save()

    return finalize_annotation(previous_annotations,annotation)



def update_text_annotation(user,allowed_annotation,text):
    '''update_text_annotation is called from update_annotation given that the
    user has provided text
    '''
    if not isinstance(text,Text):
        text = Text.objects.get(id=text)

    # Remove annotations done previously by the user for the image
    previous_annotations = TextAnnotation.objects.filter(creator=user,
                                                         text__id=text.id,
                                                         annotation__name=allowed_annotation.name)
    annotation,created = TextAnnotation.objects.get_or_create(creator=user,
                                                              text=text,
                                                              annotation=allowed_annotation)

    # If the annotation was just created, save it, and add report
    if created == True:
        annotation.save()
    
    return finalize_annotation(previous_annotations,annotation)


def finalize_annotation(previous_annotations,annotation):
    '''finalize_annotation will ensure that an annotation is
    unique, meaning removing all other options.
    :param previous_annotations: any previous annotations with the same name
    :param annotation: the annotation to set/keep
    '''
    for previous in previous_annotations:
        if previous.id != annotation.id:
            previous.delete()

    return annotation


def clear_user_annotations(user,instance):
    '''clear_user_annotations will remove all annotations for a user for
    an instance, whether an image or text.
    :param user: the user
    :param instance: the image or text to clear annotations for
    '''
    try:
        if isinstance(instance,Text):
            previous_annotations = TextAnnotation.objects.filter(creator=user,
                                                                 image__id=instance.id)
        elif isinstance(instance,Image):
            previous_annotations = ImageAnnotation.objects.filter(creator=user,
                                                                  text__id=instance.id)

        [x.delete() for x in previous_annotations]

        return True
    except:
        return False


@login_required
def update_annotations(request,instance):
    '''update_annotation_view is a general view to handle update of an annotation for a
    text or image instance
    '''
    if request.method == 'POST':
        try:
            new_annotations = json.loads(request.POST.get('annotations'))
        except:
            return JsonResponse({"error": "error parsing array!"})

        # Update the annotations
        for new_annotation in new_annotations:
            if new_annotation['value'] == "on":
                aname,alabel = new_annotation['name'].split('||')
                annotation_object = Annotation.objects.get(name=aname,
                                                           label=alabel)
                annot = update_annotation(user=request.user,
                                          allowed_annotation=annotation_object,
                                          instance=instance)
        response_data = {'result':'Create post successful!'}
        return JsonResponse(response_data)

    return JsonResponse({"have you ever seen...": "a radiologist ravioli?"})



def clear_annotations(request,instance):
    '''clear annotations view clears all annotations for a text or image instance
    :param instance: the text or image instance
    '''
    if request.method == 'POST':
        try:
            status = clear_user_annotations(request.user,image)
            response_data = {'result':'Annotations successfully cleared',
                             'status': status}
        except:
            response_data = {'result':'Error clearing annotations.'}
        return JsonResponse(response_data)
    return JsonResponse({"have you ever seen...": "a researcher rigatoni?"})


###############################################################################################
# Markup ######################################################################################
###############################################################################################


@login_required
def update_text_markup(request,uid):
    '''update_text_annotation will update a user's text annotation
    '''
    if request.method == 'POST':
        try:
            markups = json.loads(request.POST.get('markup'))
        except:
            return JsonResponse({"error": "error parsing markup!"})

        text_markup,created = TextMarkup.objects.get_or_create(creator=request.user,
                                                               text_id=uid)
        text_markup.locations = markups
        text_markup.save()
        response_data = {'result':markups}
        return JsonResponse(response_data)

    return JsonResponse({"nope...": "nopenope"})
