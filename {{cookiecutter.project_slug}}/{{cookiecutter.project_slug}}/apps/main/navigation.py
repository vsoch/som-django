from {{cookiecutter.project_slug}}.apps.main.models import (
    Collection,
    Image,
    Entity,
    ImageAnnotation,
    ImageMarkup,
    ImageDescription,
    TextDescription,
    TextMarkup,
    TextAnnotation
)

from itertools import chain
from random import choice

#############################################################################################
# Collection Level Selection (Images)
#############################################################################################

def get_contenders(collection,active=True,get_images=True):
    '''get contenders will return contender (images or text) across a set of entities.
    :param collection: the collection to get entities from
    :param active: return active or inactive (default active)
    :param get_images: if true, return images. Else, return text
    '''
    active = collection.entity_set.filter(active=active)
    contenders = []
    for entity in active:
        if get_images == True:
            contenders = list(chain(contenders,entity.image_entity.all()))    
        else:
            contenders = list(chain(contenders,entity.text_entity.all()))
    return contenders


def get_next_to_markup(user,collection,get_images=True):
    '''get next to markup will return images from a collection that a user has not seen, 
    chosen, from the entities that are available for annotation. From that set, it is a
    random selection
    :param user: the user to filter for
    :param collection: the collection to use
    :param get_images: when True, filter to ImageMarkup. Otherwise will return text.
    '''
    contenders = get_contenders(collection,active=True,get_images=get_images)

    # Do we want image or text markups?
    if get_images == True:
        previous_markups = ImageMarkup.objects.filter(creator=user,image__in=contenders)
    else:
        previous_markups = TextMarkup.objects.filter(creator=user,text__in=contenders)

    # Return a single unseen image or text
    return get_unseen(contenders=contenders,
                      seen=previous_markups,
                      get_images=get_images,
                      return_single=True)



def get_next_to_describe(user,collection,get_images=True):
    '''get next to describe will first return images for entities that a user has not seen,
    and then a random selection
    '''
    contenders = get_contenders(collection,active=True,get_images=get_images)

    # Do we want image or text markups?
    if get_images == True:
        previous_descriptions = ImageDescription.objects.filter(creator=user,image__in=contenders)
    else:
        previous_descriptions = TextDescription.objects.filter(creator=user,text__in=contenders)

    # Return a single unseen image or text
    return get_unseen(contenders=contenders,
                      seen=previous_descriptions,
                      get_images=get_images,
                      return_single=True)


def get_next_to_annotate(user,collection,get_images=True):
    '''get next to annotate will first return images for entities that a user has not seen,
    and then a random selection
    '''
    contenders = get_contenders(collection,active=True,get_images=get_images)

    # Do we want image or text markups?
    if get_images == True:
        previous_annotations = ImageAnnotation.objects.filter(creator=user,image__in=contenders)
    else:
        previous_annotations = TextAnnotation.objects.filter(creator=user,text__in=contenders)

    # Return a single unseen image or text
    return get_unseen(contenders=contenders,
                      seen=previous_annotations,
                      get_images=get_images,
                      return_single=True)



#############################################################################################
# Image Filtering
#############################################################################################


def get_unseen_single(contenders,seen,get_images=True,return_single=True):
    return get_unseen(contenders,seen,return_single=return_single,get_images=get_images)


def get_unseen(contenders,seen,return_single=True,get_images=True,repeat=False):
    '''get unseen images will take a set of seen_images and a set of contenders
    and return one (in case of return_single is True) or a set of unseen images
    :param return_single: randomly select from the set
    :param seen: a list of already seen images
    :param contenders: all images to select from
    :param repeat: allow the user to select from seen, otherwise return None.
    default is False, the user does not annotate twice.
    '''
    if get_images == True:
        already_seen = [saw.image.id for saw in seen]
    else:
        already_seen = [saw.text.id for saw in seen]

    remaining = [c for c in contenders if c.id not in already_seen]

    # If there are unseen, filter to them
    if len(remaining) > 0: 
        selection = remaining

    # Otherwise select randomly from all
    else:
        if repeat == False:
            return None
        selection = contenders

    # Does the user want to return all selection?
    if return_single == False:
        return selection

    # or randomly select one from it
    idx = choice(range(0,len(selection)))
    return selection[idx]
