from django.conf import settings
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField
from django.core.urlresolvers import reverse
from django.db import models

from {{cookiecutter.project_slug}}.apps.main.models import (
    Collection
)

from {{cookiecutter.project_slug}}.settings import MEDIA_ROOT

import collections
import operator
import os


#######################################################################################################
# Supporting Functions and Variables ##################################################################
#######################################################################################################


# Create a token for the user when the user is created (with oAuth2)
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


# Get path to where images are stored for teams
def get_image_path(instance, filename):
    team_folder = os.path.join(MEDIA_ROOT,'teams')
    if not os.path.exists(team_folder):
        os.mkdir(team_folder)
    return os.path.join('teams', filename)


#######################################################################################################
# Teams ###############################################################################################
#######################################################################################################


class Team(models.Model):
    '''A user team is a group of individuals that are annotating reports together. They can be reports across collections, or 
    institutions, however each user is only allowed to join one team.
    '''
    name = models.CharField(max_length=250, null=False, blank=False,verbose_name="Team Name")
    created_at = models.DateTimeField('date of creation', auto_now_add=True)
    updated_at = models.DateTimeField('date of last update', auto_now=True)
    team_image = models.ImageField(upload_to=get_image_path, blank=True, null=True)    
    metrics_updated_at = models.DateTimeField('date of last calculation of rank and annotations',blank=True,null=True)
    ranking = models.PositiveIntegerField(blank=True,null=True,
                                          verbose_name="team ranking based on total number of annotations, calculated once daily.")
    annotation_count = models.IntegerField(blank=False,null=False,
                                           verbose_name="team annotation count, calculated once daily.",
                                           default=0)
    members = models.ManyToManyField(User, 
                                     related_name="team_members",
                                     related_query_name="team_members", blank=True, 
                                     help_text="Members of the team. By default, creator is made member.")
                                     # would more ideally be implemented with User model, but this will work
                                     # we will constrain each user to joining one team on view side

    def __str__(self):
        return "<%s:%s>" %(self.id,self.name)

    def __unicode__(self):
        return "<%s:%s>" %(self.id,self.name)

    def get_absolute_url(self):
        return_cid = self.id
        return reverse('team_details', args=[str(return_cid)])

    def get_label(self):
        return "users"

    class Meta:
        app_label = 'users'
