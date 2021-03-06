from __future__ import absolute_import
import os
from celery import Celery
from django.conf import settings
from celery.schedules import crontab
from {{cookiecutter.project_slug}}.settings import (
    INSTALLED_APPS,
    BROKER_URL
)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', '{{cookiecutter.project_slug}}.settings')
app = Celery('{{cookiecutter.project_slug}}',broker=BROKER_URL)

# Using a string here means the worker will not have to
# pickle the object when using Windows.
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: INSTALLED_APPS)
