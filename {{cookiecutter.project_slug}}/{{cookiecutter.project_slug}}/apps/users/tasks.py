from celery.decorators import periodic_task
from celery import shared_task, Celery
from celery.schedules import crontab

from django.conf import settings
from django.core.mail import EmailMessage
from django.utils import timezone

from {{cookiecutter.project_slug}}.settings import DOMAIN_NAME
from {{cookiecutter.project_slug}}.apps.users.models import Team

from {{cookiecutter.project_slug}}.apps.users.utils import (
    summarize_team_annotations,
    summarize_teams_annotations
)

from datetime import datetime
from django.utils import timezone
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', '{{cookiecutter.project_slug}}.settings')
app = Celery('{{cookiecutter.project_slug}}')
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)


@periodic_task(run_every=crontab(minute=0, hour=0))
def update_team_rankings():
    '''update team rankings will calculate ordered rank for all current teams, count annotations,
    and update these fields (with the update date) once a day at midnight (see above)
    '''
    teams = Team.objects.all()
    rankings = summarize_teams_annotations(teams) # sorted list with [(teamid,count)]

    # Iterate through rankings, get team and annotation count
    for g in range(len(rankings)):

        group = rankings[g]
        team_id = group[0]
        rank = g+1 # index starts at 0

        try:
            team = Team.objects.get(id=team_id)
        except:
            # A team not obtainable will be skipped
            continue

        team.annotation_count = group[1]
        team.ranking = rank
        team.metrics_updated_at = timezone.now()        
        team.save()
