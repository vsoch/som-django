from guardian.shortcuts import assign_perm, get_users_with_perms, remove_perm
from polymorphic.models import PolymorphicModel
from taggit.managers import TaggableManager

from {{cookiecutter.project_slug}}.settings import MEDIA_ROOT

from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField
from django.core.urlresolvers import reverse
from django.dispatch import receiver
from django.db.models.signals import (
    m2m_changed,
    pre_delete
)

from django.db.models import Q, DO_NOTHING
from django.db import models

import errno
import collections
import operator
import os



#######################################################################################################
# Supporting Functions and Variables ##################################################################
#######################################################################################################


def mkdir_p(path):
    try:
        os.makedirs(path)
    except OSError as exc:  # Python >2.5
        if exc.errno == errno.EEXIST and os.path.isdir(path):
            pass
        else:
            raise


def get_upload_folder(instance,filename):
    '''get_upload_folder will return the folder for an image associated with the collection.
    instance: the Image instance to upload to the Collection
    filename: the filename of the image
    '''
    if isinstance(instance,Image):
        entity = instance.entity
        image_folder = instance.uid.split('/')[0]
        collection_path = "%s/%s/images/%s" %(entity.collection.id,entity.uid,image_folder)
    else:
        entity = instance.image.entity
        collection_path = "%s/%s/images" %(entity.collection.id,entity.uid)

    # This is relative to MEDIA_ROOT
    return os.path.join(str(collection_path), filename)


PRIVACY_CHOICES = ((False, 'Public (The collection will be accessible by anyone and all the data in it will be distributed under CC0 license)'),
                   (True, 'Private (The collection will be not listed. It will be possible to share it with others at a private URL.)'))

ACTIVE_CHOICES = ((False, 'Inactive. The entity is not open for updates to annotations or markups'),
                  (True, 'Active. The entity is available for markup and annotation of text and images.'))

# Each collection owner has the ability to share an annotation portal page, with
# custom instructions and links for each task. By default, all are active, with no
# instruction.

collection_status = {'text_annotation': {'active':True,'instruction': None,'title':'Text Annotation','symbol':'fa-pencil-square'},
                     'text_describe': {'active':True,'instruction': None,'title':'Text Description','symbol':'fa-pencil-square'},
                     'text_markup': {'active':True,'instruction': None,'title':'Text Markup','symbol':'fa-pencil-square'},
                     'image_annotation': {'active':True,'instruction': None,'title':'Image Annotation','symbol':'fa-picture-o'},
                     'image_describe': {'active':True,'instruction': None,'title':'Image Description','symbol':'fa-picture-o'},
                     'image_markup': {'active':True,'instruction': None, 'title':'Image Markup','symbol':'fa-picture-o'}}

#######################################################################################################
# Annotations #########################################################################################
#######################################################################################################


class Annotation(models.Model):
    '''An allowed annotation, akin to the current model, is a broad named label and a subset of options 
       that can be chosen by the user. An allowed annotation can be shared between text and images.
    '''    
    name = models.CharField(max_length=250, null=False, blank=False,help_text="term the user labeled the report with")
    label = models.CharField(max_length=250, null=False, blank=False,help_text="label allowed for the term")
    
    def __str__(self):
        return "%s:%s" %(self.name,self.label)

    def __unicode__(self):
        return "%s:%s" %(self.name,self.label)

    def get_label(self):
        return "main"

    class Meta:
        ordering = ['name']
        app_label = 'main'

        # A specific annotator can only give one label for some annotation label
        unique_together =  (("name", "label"),)


#######################################################################################################
# Collections and Entities ############################################################################
#######################################################################################################


class Collection(models.Model):
    '''A collection is a grouping of entities, mainly used for organizing sets of 
       text and images, and handling permissions to access them.
    '''
    name = models.CharField(max_length=200, null=False, verbose_name="Name of collection")
    description = models.TextField(blank=True, null=True)
    add_date = models.DateTimeField('date published', auto_now_add=True)
    modify_date = models.DateTimeField('date modified', auto_now=True)
    metadata = JSONField(default={})
    allowed_annotations = models.ManyToManyField(Annotation,
                   related_name="collection_allowed_annotations",
                   related_query_name="contributor", 
                   blank=True,verbose_name="Collection Allowed Anotations")
    
    # Users
    owner = models.ForeignKey(User)
    contributors = models.ManyToManyField(User,related_name="collection_contributors",related_query_name="contributor", blank=True,help_text="Select other users to add as contributes to the collection.",verbose_name="Contributors")

    # By default, collections are public
    private = models.BooleanField(choices=PRIVACY_CHOICES, 
                                  default=False,
                                  verbose_name="Accessibility")

    # Status objects and activation states for annotation/markups
    status = JSONField(default=collection_status)


    def get_absolute_url(self):
        return_cid = self.id
        return reverse('collection_details', args=[str(return_cid)])

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    def get_label(self):
        return "collection"

    def has_images(self):
        '''has_images will return True if a collection has entities with images.
        '''
        count = 0
        for entity in self.entity_set.all():
            count += entity.image_entity.count()
        if count > 0:
            return True
        return False

    def get_annotations(self):
        '''get_annotations will return a nicely formatted dictionary with common
        annotation labels (keys) and options list in (values)
        '''
        annotations = self.allowed_annotations.all()
        summary = dict()
        for annot in annotations:
            if annot.name not in summary:
                summary[annot.name] = []
            if annot.label not in summary[annot.name]:
                summary[annot.name].append(annot.label)
        return summary
    
        
    def has_text(self):
        '''has_text will return True if a collection has entities with text.
        '''
        count = 0
        for entity in self.entity_set.all():
            count += entity.text_entity.count()
        if count > 0:
            return True
        return False


    def save(self, *args, **kwargs):
        super(Collection, self).save(*args, **kwargs)
        assign_perm('del_collection', self.owner, self)
        assign_perm('edit_collection', self.owner, self)

    class Meta:
        ordering = ["name"]
        app_label = 'main'
        permissions = (
            ('del_collection', 'Delete collection'),
            ('edit_collection', 'Edit collection'),
        )



class Entity(models.Model):
    '''An entity is a person, place, whatever, that has one or more associated text and image things. 
       This is how we group text and images together under some common identifier.
    '''
    uid = models.CharField(max_length=200, null=False, verbose_name="unique id of entity")
    collection = models.ForeignKey(Collection)
    active = models.BooleanField(choices=ACTIVE_CHOICES, 
                                  default=True,
                                  verbose_name="Entity active for annotation and markup")
    metadata = JSONField(default={})


    def get_absolute_url(self):
        return_cid = self.id
        return reverse('entity_details', args=[str(return_cid)])

    def __str__(self):
        return self.uid

    def __unicode__(self):
        return self.uid

    def get_label(self):
        return "image"

    class Meta:
        app_label = 'main'
        unique_together =  (("uid", "collection"),)



#######################################################################################################
# Images ##############################################################################################
#######################################################################################################

class Image(models.Model):
    '''An "image" is broadly a parent class that holds an original (raw) 
       file, and then markups of it.
    '''
    uid = models.CharField(max_length=250, null=False, blank=False)
    entity = models.ForeignKey(Entity,related_name="image_entity",related_query_name="image_entity")
    original = models.FileField(upload_to=get_upload_folder,null=True,blank=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)
    metadata = JSONField(default={})
    tags = TaggableManager()
    
    def __str__(self):
        return self.uid

    def __unicode__(self):
        return self.uid
 
    @models.permalink
    def get_absolute_url(self):
        return ('upload-new', )

    def get_folder_name(self):
        return self.uid.split('/')[0]

    def get_file_name(self):
        return self.uid.split('/')[-1]

    def save(self, *args, **kwargs):
        self.slug = self.original.name
        super(Image, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        """delete -- Remove to leave file."""
        #self.original.delete(False)
        super(Image, self).delete(*args, **kwargs)

    def get_label(self):
        return "image"

    class Meta:
        app_label = 'main'
 



#######################################################################################################
# Markups #############################################################################################
#######################################################################################################


class ImageMarkup(models.Model):
    '''A markup is like a transparent layer that fits to its matched image (see Image.image_markups). 
       By default of being a markup, it is intended to be used on a 2D image, which means that if 
       a markup is created for a 2D image, what is being created is a slice. To support this, each 
       markup stores a file location (for the overlay image) along with a metadata field that can 
       support an x,y,z layer, or more broadly, some transformation matrix for converting the 
       2D or 3D image to the 2D one.
    '''
    image = models.ForeignKey(Image,related_name="marked_image",related_query_name="marked_image", 
                              blank=False,
                              help_text="the original image",verbose_name="image marked up")
    modify_date = models.DateTimeField('date modified', auto_now=True)
    creator = models.ForeignKey(User,related_name="creator_of_image",
                                related_query_name="creator_of_image", blank=False,
                                help_text="user that created the markup.",verbose_name="Creator")
    base = models.ImageField(upload_to=get_upload_folder,null=True,blank=True, 
                            help_text="saved base image as png")
    overlay = models.ImageField(upload_to=get_upload_folder,null=True,blank=True,
                               help_text="an overlay is a transparent layer with the markup")
    transformation = JSONField(default={}, 
                     help_text = "a metadata field with the transformation applied to the original image to produce the overlay dimension")

    class Meta:
        unique_together =  (("image", "creator"),)


class ImageDescription(models.Model):
    '''An image description is an open text field to describe an image.
    '''
    image = models.ForeignKey(Image,related_name="described_image",related_query_name="described_image", 
                              blank=False,
                              help_text="the original image",verbose_name="image described")
    modify_date = models.DateTimeField('date modified', auto_now=True)
    creator = models.ForeignKey(User,related_name="creator_of_image_description",
                                related_query_name="creator_of_image_description", blank=False,
                                help_text="user that created the description.",verbose_name="Creator")
    description = models.TextField(blank=True,null=True)

    # A specific annotator can only give one label for some annotation label
    class Meta:
        unique_together =  (("image", "creator"),)


@receiver(pre_delete)
def delete_markup(sender, instance, **kwargs):
    '''delete markup will make sure that an associated overlay file is always
    deleted before the image markup
    '''
    if sender == ImageMarkup:
        instance.overlay.delete()


class ImageAnnotation(models.Model):
      '''equivalent to an image markup (pointing to a matched image) but it has the additional allowed annotation. 
         If the overlay is empty for the ImageMarkup, it is assumed to describe the whole image.
      '''
      image = models.ForeignKey(Image,related_name="annotated_image",related_query_name="annotated_image", 
                                blank=False,
                                help_text="the original image",verbose_name="image marked up")
      modify_date = models.DateTimeField('date modified', auto_now=True)
      creator = models.ForeignKey(User,related_name="creator_of_image_annotation",
                                related_query_name="creator_of_image_annotation", blank=False,
                                help_text="user that created the annotation.",verbose_name="Creator")
      annotation = models.ForeignKey(Annotation,related_name="annotation_of_image",related_query_name="annotation_of_image")
      coordinates = JSONField(default={})

      class Meta:
          unique_together =  (("image", "creator","annotation"),)


#######################################################################################################
# Texts ###############################################################################################
#######################################################################################################


class Text(models.Model):
    '''A "text" object is broadly a parent class that holds a chunk of text, 
       namely the original (raw) text content, and then markups of it.
    '''
    uid = models.CharField(max_length=250, null=False, blank=False)
    entity = models.ForeignKey(Entity,related_name="text_entity",related_query_name="text_entity")
    original = models.CharField(max_length=10000, null=False, blank=False)
    metadata = JSONField(default={})
    tags = TaggableManager()
    
    def get_folder_name(self):
        return self.uid.split('/')[0]

    def get_file_name(self):
        return self.uid.split('/')[-1]

    def __str__(self):
        return "%s" %(self.uid)

    def __unicode__(self):
        return "%s" %(self.uid)
 
    def get_label(self):
        return "text"

    class Meta:
        app_label = 'main'
 
    # Get the url for a report collection
    def get_absolute_url(self):
        return_cid = self.id
        return reverse('text_details', args=[str(return_cid)])


class TextDescription(models.Model):
    '''A text description is an open text field to describe a text.
    '''
    text = models.ForeignKey(Text,related_name="described_text",related_query_name="described_text", 
                             blank=False,
                             help_text="the original text",verbose_name="text described")
    modify_date = models.DateTimeField('date modified', auto_now=True)
    creator = models.ForeignKey(User,related_name="creator_of_text_description",
                                related_query_name="creator_of_text_description", blank=False,
                                help_text="user that created the description.",verbose_name="Creator")
    description = models.TextField(blank=True,null=True)

    # A specific annotator can only give one label for some annotation label
    class Meta:
        unique_together =  (("text", "creator"),)


class TextMarkup(models.Model):
    '''A text markup is a specific subset of locations in the text, not associated with any label, 
       stored with a Text object (see Text.text_markup). The markup is just a list of start and 
       stop locations, based on some delimiter in the text (default is a space)
    '''
    text = models.ForeignKey(Text,related_name="markup_described_text",related_query_name="markup_described_text", 
                             blank=False,
                             help_text="the original text",verbose_name="text described")
    creator = models.ForeignKey(User,related_name="creator_text",related_query_name="creator_text", blank=False,
                                help_text="user that created the markup.",verbose_name="Creator")
    modify_date = models.DateTimeField('date modified', auto_now=True)
    delimiter = models.CharField(max_length=50, null=False, blank=False, default="\w")
    locations = JSONField(default={}, 
                          help_text = "a list of start and stop locations for the markup (JSONfield)")



class TextAnnotation(TextMarkup):
      '''A text annotation is equivalent to a text markup (pointing to a matched Text) but it has the 
         additional allowed annotation. If the locations list is empty, it is assumed to 
         describe the whole body of text.
      '''
      annotation = models.ForeignKey(Annotation,related_name="annotation_of_text",related_query_name="annotation_of_text")




def contributors_changed(sender, instance, action, **kwargs):
    if action in ["post_remove", "post_add", "post_clear"]:
        current_contributors = set([user.pk for user in get_users_with_perms(instance)])
        new_contributors = set([user.pk for user in [instance.owner, ] + list(instance.contributors.all())])

        for contributor in list(new_contributors - current_contributors):
            contributor = User.objects.get(pk=contributor)
            assign_perm('edit_collection', contributor, instance)

        for contributor in (current_contributors - new_contributors):
            contributor = User.objects.get(pk=contributor)
            remove_perm('edit_collection', contributor, instance)



m2m_changed.connect(contributors_changed, sender=Collection.contributors.through)
