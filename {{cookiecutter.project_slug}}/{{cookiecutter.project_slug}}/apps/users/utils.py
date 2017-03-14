from django.contrib.auth.models import User
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
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from {{cookiecutter.project_slug}}.apps.main.models import *
import collections
from datetime import datetime
from datetime import timedelta
from itertools import chain
from numpy import unique
import operator
import os

from django.utils import timezone

from {{cookiecutter.project_slug}}.apps.users.models import Team

def get_user(uid):
    '''get a single user, or return 404'''
    keyargs = {'id':uid}
    try:
        user = User.objects.get(**keyargs)
    except User.DoesNotExist:
        raise Http404
    else:
        return user

def get_team(tid):
    '''get a single team, or return 404'''
    keyargs = {'id':tid}
    try:
        team = Team.objects.get(**keyargs)
    except Team.DoesNotExist:
        raise Http404
    else:
        return team



####################################################################################
# SUMMARY FUNCTIONS ################################################################
####################################################################################



def summarize_team_annotations(members):
    '''summarize_team_annotations will return a summary of annotations for a group of users, typically a team
    :param members: a list or queryset of users
    '''
    counts = dict()
    total = 0
    for member in members:
        member_counts = count_user_annotations(member)
        member_count = sum(member_counts.values())
        counts[member.username] = member_count
        total += member_count
    counts['total'] = total
    return counts    


def count_user_annotations(users):
    '''return the count of a single user's annotations, by type
    (meaning across images, text, annotations, descriptions, and markups)
    '''
    counts = dict()

    # Count for a single user
    if isinstance(users,User):
        counts['image-markup'] = ImageMarkup.objects.filter(creator=users).distinct().count()
        counts['text-markup'] = TextMarkup.objects.filter(creator=users).distinct().count()
        counts['text-annotation'] = TextAnnotation.objects.filter(creator=users).distinct().count()
        counts['image-annotation'] = ImageAnnotation.objects.filter(creator=users).distinct().count()
        counts['text-description'] = TextDescription.objects.filter(creator=users).distinct().count()
        counts['image-description'] = ImageDescription.objects.filter(creator=users).distinct().count()

    # or count across a group of users
    else:
        counts['image-markup'] = ImageMarkup.objects.filter(creator__in=users).distinct().count()
        counts['text-markup'] = TextMarkup.objects.filter(creator__in=users).distinct().count()
        counts['text-annotation'] = TextAnnotation.objects.filter(creator__in=users).distinct().count()
        counts['image-annotation'] = ImageAnnotation.objects.filter(creator__in=users).distinct().count()
        counts['text-description'] = TextDescription.objects.filter(creator__in=users).distinct().count()
        counts['image-description'] = ImageDescription.objects.filter(creator__in=users).distinct().count()

    return counts


def count_annotations_bydate(user):
    '''return a list of dates and counts that a user has annotated, in the past year.
    '''
    dates = dict()
    now = timezone.now()
    then = now + timezone.timedelta(days=-365)

    # For each, get all annotation objects
    annots = []
    annots = chain(annots,ImageMarkup.objects.filter(creator=user).distinct())
    annots = chain(annots,TextMarkup.objects.filter(creator=user).distinct())
    annots = chain(annots,TextAnnotation.objects.filter(creator=user).distinct())
    annots = chain(annots,ImageAnnotation.objects.filter(creator=user).distinct())
    annots = chain(annots,TextDescription.objects.filter(creator=user).distinct())
    annots = chain(annots,ImageDescription.objects.filter(creator=user).distinct())
    annots = list(annots)
    for annot in annots:
        annotation_time = annot.modify_date
        annotation_time = annotation_time.replace(hour=0, minute=0, second=0, microsecond=0)
        if annotation_time > then and annotation_time < now:
            if annotation_time not in dates:
                dates[annotation_time] = 1
            else:
                dates[annotation_time] +=1
    return dates


def summarize_teams_annotations(teams,sort=True):
    '''summarize_teams_annotations returns a sorted list with [(team:count)] 
    :param members: a list or queryset of users
    :param sort: sort the result (default is True)
    '''
    sorted_teams = dict()
    for team in teams:
        team_count = summarize_team_annotations(team.members.all())['total']
        sorted_teams[team.id] = team_count
    if sort == True:
        sorted_teams = sorted(sorted_teams.items(), key=operator.itemgetter(1))
        sorted_teams.reverse() # ensure returns from most to least
    return sorted_teams



####################################################################################
# TEAM FUNCTIONS ###################################################################
####################################################################################


def get_user_team(request):
    ''' get the team of the authenticated user
    '''
    if request.user.is_authenticated():
        user_team = Team.objects.filter(members=request.user)
        if len(user_team) > 0:
            return user_team[0]
    return None


def remove_user_teams(remove_teams,user):
    '''removes a user from one or more teams
    :param remove_teams: the list of teams to remove the user from
    :param user: the user to remove
    :returns: previous team removed from (user only allowed one at a time)
    '''
    if remove_teams == None:
        return remove_teams

    previous_team = None
    if not isinstance(remove_teams,list):
        remove_teams = [remove_teams]
    for remove_team in remove_teams:
        if user in remove_team.members.all():
            previous_team = remove_team
            remove_team.members.remove(user)
            remove_team.save()
    return previous_team


def has_team_edit_permission(request,team):
    '''only the owner of a team can edit it.
    '''
    if request.user in team.members.all():
        return True
    return False
