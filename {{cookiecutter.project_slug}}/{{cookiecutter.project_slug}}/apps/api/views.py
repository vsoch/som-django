from django.http import (
    Http404, 
    JsonResponse, 
    HttpResponse
)

from django.template import RequestContext
from django.shortcuts import (
    render, 
    render_to_response
)

from django.contrib.auth.decorators import login_required
import hashlib

from {{cookiecutter.project_slug}}.settings import API_VERSION as APIVERSION
from {{cookiecutter.project_slug}}.apps.main.models import *
from rest_framework import (
    viewsets, 
    generics
)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from {{cookiecutter.project_slug}}.apps.api.serializers import *
from {{cookiecutter.project_slug}}.apps.api.utils import chooseJsonResponse
from django.contrib.auth.models import User



#########################################################################
# Auth
# get user tokens!
#########################################################################

@login_required
def token(request):
    '''getToken retrieves the user's token, and returns a page with it
    for the user to use to authenticate with the API
    '''
    token = get_token(request,json_response=False)
    context = RequestContext(request, {'request': request,
                                       'user': request.user,
                                       'token': token['token'] })
    return render_to_response("users/token.html", context_instance=context)


def get_token(request,json_response=True):
    '''getToken is used to authenticate a user.
    :param json_response: if True, seld JsonResponse. Otherwise, json
    '''
    # On error, make sure user knows that...
    message = '''/api/token is only available when being called 
                 from within a browser'''

    if request.user != None and request.user.is_anonymous() == False:
        try:
            token = request.user.auth_token
        except User.DoesNotExist:

            # Tell the user the error is not found
            response = {'error': 'User not found.','message':message}
            return chooseJsonResponse(response,json_response,status=404)
 
        response = {"token":token.key}
        return chooseJsonResponse(response,json_response)

    else:
        response = {'error': 'User not authenticated.','message': message }
        return chooseJsonResponse(response,json_response,status=401)


#########################################################################
# GET
# requests for information about reports and collections
#########################################################################

def api_view(request,api_version=None):
    '''this function is no longer in use in favor of swagger base''' 
    if api_version == None:
        api_version = APIVERSION

    # In future, we can then return different versions  of docs for api
    context = {"api_version":api_version}
    return render(request, 'routes/api.html', context)



class CollectionViewSet(viewsets.ReadOnlyModelViewSet):
    '''CollectionViewSet is an API endpoint that allows 
    all collections to be viewed
    '''
    queryset = Collection.objects.filter(private=False)
    serializer_class = CollectionSerializer

class EntityViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Entity.objects.filter(collection__private=False,active=True)
    serializer_class = EntitySerializer

class AnnotationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Annotation.objects.all()
    serializer_class = AnnotationSerializer

class ImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Image.objects.filter(entity__collection__private=False,entity__active=True)
    serializer_class = ImageSerializer

class TextViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Text.objects.filter(entity__collection__private=False,entity__active=True)
    serializer_class = TextSerializer

class TextAnnotationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TextAnnotation.objects.filter(text__entity__collection__private=False,
                                             text__entity__active=True)
    serializer_class = TextAnnotationSerializer

class ImageAnnotationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ImageAnnotation.objects.filter(image__entity__collection__private=False,
                                              image__entity__active=True)
    serializer_class = ImageAnnotationSerializer

class ImageMarkupViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ImageMarkup.objects.filter(image__entity__collection__private=False,
                                          image__entity__active=True)
    serializer_class = ImageMarkupSerializer

class TextMarkupViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TextMarkup.objects.filter(text__entity__collection__private=False,
                                         text__entity__active=True)
    serializer_class = TextMarkupSerializer

class TextDescriptionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TextDescription.objects.filter(text__entity__collection__private=False,
                                              text__entity__active=True)
    serializer_class = TextDescriptionSerializer

class ImageDescriptionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ImageDescription.objects.filter(image__entity__collection__private=False,
                                               image__entity__active=True)
    serializer_class = ImageDescriptionSerializer
