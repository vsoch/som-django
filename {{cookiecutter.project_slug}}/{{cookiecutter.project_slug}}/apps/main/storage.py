from django.core.files.storage import FileSystemStorage
from django.core.files.move import file_move_safe
from django.contrib.auth.models import User
from django.apps import apps

from fnmatch import fnmatch
from {{cookiecutter.project_slug}}.settings import (
    MEDIA_ROOT, 
    MEDIA_URL
)

import errno
import itertools
import os
import tempfile

############################################################################
# Storage Models
############################################################################

class {{cookiecutter.project_slug}}Storage(FileSystemStorage):
    def __init__(self, location=None, base_url=None):
        if location is None:
            location = MEDIA_ROOT
        if base_url is None:
            base_url = MEDIA_URL
        super({{cookiecutter.project_slug}}Storage, self).__init__(location, base_url)

    def url(self, name):
        uid = None
        spath, file_name = os.path.split(name)
        urlsects = [v for v in spath.split('/') if v]
        for i in range(len(urlsects)):
            sect = urlsects.pop(0)
            if sect.isdigit():
                collection_id = sect
                break
        report_path = '/'.join(urlsects)
        coll_model = apps.get_model('{{cookiecutter.project_slug}}', 'Collection')
        collection = coll_model.objects.get(id=uid)
        #if collection.private:
        #    cid = collection.private_token
        #else:
        cid = collection.id
        return os.path.join(self.base_url, str(cid), cont_path, file_name)


class ImageStorage({{cookiecutter.project_slug}}Storage):
    def get_available_name(self, name):
        """
        Returns a filename that's free on the target storage system, and
        available for new content to be written to.
        """
        dir_name, file_name = os.path.split(name)
        file_root, file_ext = os.path.splitext(file_name)
        # If the filename already exists, add an underscore and a number (before
        # the file extension, if one exists) to the filename until the generated
        # filename doesn't exist.
        count = itertools.count(1)
        while self.exists(name):
            # file_ext includes the dot.
            name = os.path.join(dir_name, "%s_%s%s" % (file_root, next(count), file_ext))

        return name
