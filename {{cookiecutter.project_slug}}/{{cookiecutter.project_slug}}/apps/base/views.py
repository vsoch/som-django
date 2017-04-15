from django.http import HttpResponse, JsonResponse
from django.template import RequestContext
from django.shortcuts import render, render_to_response
from django.urls import reverse
from social_django.utils import load_strategy, load_backend
import hashlib


def index_view(request):
    return render(request, 'base/index.html')

def about_view(request):
    return render(request, 'base/about.html')

def user_guide_view(request):
    return render(request, 'base/user_guide.html')

# SAML Authentication

def saml_metadata_view(request):
    complete_url = reverse('social:complete', args=("saml", ))
    saml_backend = load_backend(
        load_strategy(request),
        "saml",
        redirect_uri=complete_url,
    )
    metadata, errors = saml_backend.generate_metadata_xml()
    if not errors:
        return HttpResponse(content=metadata, content_type='text/xml')


# Error Pages ##################################################################

def handler404(request):
    return render(request,'base/404.html')

def handler500(request):
    return render(request,'base/500.html')
