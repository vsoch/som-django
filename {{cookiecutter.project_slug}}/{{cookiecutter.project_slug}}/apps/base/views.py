from django.template import RequestContext
from django.shortcuts import render, render_to_response
import hashlib

def index_view(request):
    return render(request, 'base/index.html')

def about_view(request):
    return render(request, 'base/about.html')

def user_guide_view(request):
    return render(request, 'base/user_guide.html')


# Error Pages ##################################################################

def handler404(request):
    return render(request,'base/404.html')

def handler500(request):
    return render(request,'base/500.html')
