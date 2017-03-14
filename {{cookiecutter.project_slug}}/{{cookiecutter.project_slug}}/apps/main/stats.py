from django.contrib.auth.models import User
from django.db.models.aggregates import Count
from itertools import chain
from {{cookiecutter.project_slug}}.apps.main.models import *

from {{cookiecutter.project_slug}}.apps.users.utils import get_user
from base64 import b64decode
from {{cookiecutter.project_slug}}.settings import MEDIA_ROOT
from random import randint
from numpy.random import shuffle
import numpy
import json
import operator
import pandas
import shutil
import os
import re


def count_task_annotations(collection,fieldtype):
    '''count task annotations by user, also breaking down labels, for
    a task type in image_markups, text_markups, etc.
    '''
    counts = []
    if fieldtype == "image_markups":
        counts = count_image_markups(collection)
    elif fieldtype == "text_markups":
        counts = count_text_markups(collection)
    elif fieldtype == "image_annotations":
        counts = count_image_annotations(collection)
    elif fieldtype == "text_annotations":
        counts = count_text_annotations(collection)
    elif fieldtype == "image_descriptions":
        counts = count_image_descriptions(collection)
    elif fieldtype == "text_descriptions":
        counts = count_text_descriptions(collection)
    if len(counts) > 0:
        return counts
    return None



def count_text_markups(collection):
    '''return list of dictionaries with user and count for each
    '''
    counts = []
    user_ids = list(TextMarkup.objects.filter(text__entity__collection=collection).values_list('creator',flat=True).distinct())
    for user_id in user_ids:
        count = TextMarkup.objects.filter(text__entity__collection=collection,creator__id=user_id).count()
        record = {'user':get_user(user_id),
                  'count': count}       
        counts.append(record)
    return counts


def count_image_markups(collection):
    '''return list of dictionaries with user and count for each
    '''
    counts = []
    user_ids = list(ImageMarkup.objects.filter(image__entity__collection=collection).values_list('creator',flat=True).distinct())
    for user_id in user_ids:
        count = ImageMarkup.objects.filter(image__entity__collection=collection,creator__id=user_id).count()
        record = {'user':get_user(user_id),
                  'count': count}       
        counts.append(record)
    return counts


def count_image_descriptions(collection):
    '''return list of dictionaries with user and count for each
    '''
    counts = []
    user_ids = list(ImageDescription.objects.filter(image__entity__collection=collection).values_list('creator',flat=True).distinct())
    for user_id in user_ids:
        count = ImageDescription.objects.filter(image__entity__collection=collection,creator__id=user_id).count()
        record = {'user':get_user(user_id),
                  'count': count}       
        counts.append(record)
    return counts


def count_text_descriptions(collection):
    '''return list of dictionaries with user and count for each
    '''
    counts = []
    user_ids = list(TextDescription.objects.filter(text__entity__collection=collection).values_list('creator',flat=True).distinct())
    for user_id in user_ids:
        count = TextDescription.objects.filter(text__entity__collection=collection,creator__id=user_id).count()
        record = {'user':get_user(user_id),
                  'count': count}       
        counts.append(record)
    return counts


def count_text_annotations(collection):
    '''return list of dictionaries with user and count for each
    '''
    counts = []
    user_ids = list(TextAnnotation.objects.filter(text__entity__collection=collection).values_list('creator',flat=True).distinct())
    labels = list(collection.allowed_annotations.order_by().values_list('name',flat=True).distinct())

    for user_id in user_ids:
        annotations = dict()
        for label in labels:
            annot_set = dict()
            options = list(collection.allowed_annotations.filter(name=label).order_by().values_list('label',flat=True).distinct())
            for option in options:
                annot_set[option] = TextAnnotation.objects.filter(text__entity__collection=collection,
                                                                  annotation__name=label,
                                                                  annotation__label=option,
                                                                  creator__id=user_id).distinct().count()
            annotations[label] = annot_set
        record = {'user':get_user(user_id),
                  'count': annot_set}       
        counts.append(record)
    return counts


def count_image_annotations(collection):
    '''return list of dictionaries with user and count for each
    '''
    counts = []
    user_ids = list(TextAnnotation.objects.filter(text__entity__collection=collection).values_list('creator',flat=True).distinct())
    labels = list(collection.allowed_annotations.order_by().values_list('name',flat=True).distinct())

    for user_id in user_ids:
        annotations = dict()
        for label in labels:
            annot_set = dict()
            options = list(collection.allowed_annotations.filter(name=label).order_by().values_list('label',flat=True).distinct())
            for option in options:
                annot_set[option] = ImageAnnotation.objects.filter(image__entity__collection=collection,
                                                                   annotation__name=label,
                                                                   annotation__label=option,
                                                                   creator__id=user_id).distinct().count()
            annotations[label] = annot_set
        record = {'user':get_user(user_id),
                  'count': annot_set}       
        counts.append(record)
    return counts


def count_collection_annotations(collection):
    '''return the count of a annotations, by type, across a collection
    '''
    counts = dict()

    # Count markups and descriptions of images and text
    counts['image markups'] = ImageMarkup.objects.filter(image__entity__collection=collection).distinct().count()
    counts['text markups'] = TextMarkup.objects.filter(text__entity__collection=collection).distinct().count()
    counts['text descriptions'] = TextDescription.objects.filter(text__entity__collection=collection).distinct().count()
    counts['image descriptions'] = ImageDescription.objects.filter(image__entity__collection=collection).distinct().count()

    # For each annotation, we have labels
    labels = list(collection.allowed_annotations.order_by().values_list('name',flat=True).distinct())

    image_annotations = dict()
    text_annotations = dict()
    for label in labels:
        text_set = dict()
        image_set = dict()
        options = list(collection.allowed_annotations.filter(name=label).order_by().values_list('label',flat=True).distinct())
        for option in options:
            text_set[option] = TextAnnotation.objects.filter(text__entity__collection=collection,
                                                             annotation__name=label,
                                                             annotation__label=option).distinct().count()
            image_set[option] = ImageAnnotation.objects.filter(image__entity__collection=collection,
                                                               annotation__name=label,
                                                               annotation__label=option).distinct().count()
        image_annotations[label] = image_set
        text_annotations[label] = text_set

    counts['image annotations'] = image_annotations
    counts['text annotations'] = text_annotations

    return counts


