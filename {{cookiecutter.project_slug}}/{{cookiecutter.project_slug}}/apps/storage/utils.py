from django.core.files import File
from {{cookiecutter.project_slug}}.apps.main.models import (
    Collection,
    Entity,
    Image,
    Text
)

import tempfile
import json
import os
import re

def extract_tmp(memory_file,base_dir=None):
    '''extract tmp will extract a file to a temporary location
    :base_dir: if defined, will create directory here
    '''
    if base_dir == None:
        tmpdir = tempfile.mkdtemp()
    else:
        tmpdir = tempfile.mkdtemp(dir=base_dir)

    file_name = '%s/%s' %(tmpdir,memory_file.name)
    with open(file_name, 'wb+') as dest:
        for chunk in memory_file.chunks():
            dest.write(chunk)
    return file_name


def import_structures(structures,collection):
    '''import structures will import structures (export from {{cookiecutter.project_slug}} standard with som-tools)
    and add the entities, images/text to a collection. In the case of updating an entity,
    metadata is overwritten if new metadata is provided. The same is true for text and images,
    and this can be changed if warranted or needed.
    :param structures: a list of structures, each on the level of a collection 
     (and will be imported into collection)
    :param collection: the collection to import the structures into 
    '''
    for structure in structures:
        if "collection" in structure:
            if "entities" in structure['collection']:
                # Parsing entities
                entities = structure['collection']['entities']
                for entity in entities:
                    if "entity" in entity:
                        entity_id = os.path.basename(entity['entity']['id'])
                        new_entity,created = Entity.objects.get_or_create(uid=entity_id,
                                                                          collection=collection)
                        
                        if "metadata" in entity['entity']:
                            metadata = json.loads(open(entity['entity']['metadata'],'r'))
                            new_entity.metadata = metadata
                        new_entity.save()
                        # Add images
                        images = None
                        if 'images' in entity['entity']:
                            images = entity['entity']['images']
                        # Add texts
                        texts = None
                        if 'texts' in entity['entity']:
                            texts = entity['entity']['texts']
                        # Add images and texts to entity
                        entity = update_entity(entity=new_entity,
                                               images=images,
                                               texts=texts)
    return collection


def update_entity(entity,images=None,texts=None):
    '''update_entity will add images and text (lists) to an entity object.
    :param entity: the {{cookiecutter.project_slug}}.apps.main.models Entity
    :param images: a list of images, from the {{cookiecutter.project_slug}} structure
    :param texts: a list of texts in the same standard
    '''

    # Add images
    if images != None:
        for image in images:
            image_file = image['original']
            image_folder = image_file.split('/')[-2]
            image_basename = os.path.basename(image_file)
            image_uid = "%s/%s" %(image_folder,image_basename)
            print(image_uid)

            # if it's an overlay, skip it.
            if not re.search('overlay',image_uid):
                new_image,created = Image.objects.get_or_create(uid=image_uid,
                                                                entity=entity)
                if created == True:
                    new_image.save()
                with open(image_file,'rb') as filey:
                     django_file = File(filey)
                     new_image.original.save(os.path.basename(image_file),
                                             django_file,save=True)  
                if "metadata" in image:
                    metadata = json.load(open(image['metadata'],'r'))
                    new_image.metadata = metadata
                new_image.save()


    # Parsing text
    if texts != None:
        for text in texts:
            text_file = text['original']
            text_id = os.path.basename(text_file)
            with open(text_file,'r') as filey:
                content = filey.read()
            new_text,created = Text.objects.get_or_create(uid=text_id,
                                                          original=content,
                                                          entity=entity)
            if "metadata" in text:
                metadata = json.load(open(text['metadata'],'r'))
                new_text.metadata = metadata
                new_text.save()
    entity.save()
    return entity
