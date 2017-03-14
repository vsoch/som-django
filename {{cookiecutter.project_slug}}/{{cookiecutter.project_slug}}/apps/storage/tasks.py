from celery.decorators import periodic_task
from celery import shared_task, Celery
from celery.schedules import crontab

from django.conf import settings
from django.contrib.auth.models import User
from django.core.mail import EmailMessage
from django.utils import timezone

from notifications.signals import notify
from {{cookiecutter.project_slug}}.settings import DOMAIN_NAME
from {{cookiecutter.project_slug}}.apps.main.models import (
    Collection,
    Entity,
    Image,
    Text
)

from som.{{cookiecutter.project_slug}}.validators import (
    validate_folder,
    validate_compressed
)

from som.{{cookiecutter.project_slug}}.structures import (
    structure_compressed
)

from {{cookiecutter.project_slug}}.apps.users.utils import get_user
from {{cookiecutter.project_slug}}.apps.main.utils import get_collection
from {{cookiecutter.project_slug}}.apps.storage.utils import (
    extract_tmp,
    import_structures
)

from {{cookiecutter.project_slug}}.settings import MEDIA_ROOT
from datetime import datetime
from itertools import chain
import os
import tempfile
import shutil

os.environ.setdefault('DJANGO_SETTINGS_MODULE', '{{cookiecutter.project_slug}}.settings')
app = Celery('{{cookiecutter.project_slug}}')
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)

@shared_task
def test_worker(printme):
    '''test worker is a dummy function to print some output to the console.
    You should be able to see it via docker-compose logs worker
    '''
    print(printme)


@shared_task
def validate_dataset_upload(compressed_file,remove_folder=False):
    '''validate_dataset_upload will take an compressed file object, decompress
    it, and validate it for correctness. If it's valid, it will return true, 
    and another job can actually upload the dataset (so there is no
    delay on the front end) 
    :param compressed_file: a string path to a file to test.
    '''
    tmpdir = os.path.dirname(compressed_file)
    valid = validate_compressed(compressed_file)
    result = {'valid':valid,
              'file':compressed_file}
    if remove_folder == True:
        shutil.rmtree(tmpdir)
    return result


@shared_task
def dataset_upload(compressed_file,cid):
    '''dataset_upload will take an compressed file object, decompress
    it, (again) validate it for correctness, and then upload the dataset.
    '''
    tmpdir = os.path.dirname(compressed_file)
    collection = get_collection(cid)
    if validate_compressed(compressed_file) == True:
  
        # Now we add entities to the collection
        structures = structure_compressed(compressed_file,
                                          testing_base=tmpdir,
                                          clean_up=False)  

        collection = import_structures(structures,collection)

    shutil.rmtree(tmpdir)


@shared_task
def validate_memory_upload(memory_file,collection):
    '''validate_upload will first validate an uploaded (compressed) file
    for validity. If it's valid, it fires off a job to extract data
    to a collection. If not valid, it returns the error message to
    the user.
    :param memory_file: the in memory uploaded file
    :param collection: the collection to add the uploaded dataset to
    '''
    data = {'is_valid': False, 'name': 'Invalid', 'url': ""}

    tmpdir = "%s/tmp" %MEDIA_ROOT
    if not os.path.exists(tmpdir):
        os.mkdir(tmpdir)
    compressed_file = extract_tmp(memory_file,base_dir=tmpdir)
    result = validate_dataset_upload(compressed_file)

    if result['valid'] == True:
        dataset_upload.apply_async(kwargs={"compressed_file": result['file'],
                                           "cid":collection.id })

        name = os.path.basename(result['file'])
        data = {'is_valid': True, 'name': name, 'url': collection.get_absolute_url()}

    else:
        tmpdir = os.path.dirname(result['file'])
        shutil.rmtree(tmpdir)

    return data
