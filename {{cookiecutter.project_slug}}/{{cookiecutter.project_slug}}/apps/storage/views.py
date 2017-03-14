import time

import json
import simplejson
import os

from django.contrib import messages
from django.template import Context, loader
from django.shortcuts import (
    render_to_response, 
    redirect, 
    render
)

from django.http import (
    HttpResponse, 
    HttpResponseBadRequest, 
    HttpResponseRedirect,
    Http404
)

from {{cookiecutter.project_slug}}.apps.main.models import (
    Collection,
    Image
)

from {{cookiecutter.project_slug}}.apps.main.utils import (
    get_collection
)

from {{cookiecutter.project_slug}}.apps.storage.tasks import (
    validate_memory_upload
)

import pickle


from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views import View


class UploadDatasets(View):
    '''UploadDatasets will take an uploaded file, and parse it as a dataset for correctness and import to 
    WordFish. A dataset that is too large for this interface should be upload in a different method (TBD)
    '''
    def get(self, request, cid):
        collection = get_collection(cid)
        context = {"collection":collection}
        return render(self.request, 'upload/datasets_upload.html', context)

    def post(self, request, cid):
        collection = get_collection(cid)

        # A post without files, not sure how/why this would be done, but should be caught
        if request.FILES == None:
            data = {'is_valid': False, 'name': "No files provided", 'url': "/"}
            return JsonResponse(data)
            
        # Is this a valid data structure?
        memory_file = request.FILES['file']

        data = validate_memory_upload(memory_file=memory_file,
                                      collection=collection)
        if data['is_valid'] == True:
            messages.info(request,"Your datasets are uploading. Please refresh the page if you do not see them.")

        return JsonResponse(data)


def clear_database(request):
    return redirect(request.POST.get('next'))
