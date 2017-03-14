from django.http import JsonResponse
from datetime import datetime
import shutil
import tempfile


def chooseJsonResponse(response,json_response=True,status=None):
    '''chooseJsonResponse will return either a json response, 
    or just the json
    :param response: the response dictionary to serialize to json
    :param json_response: return a json response (True), or just json (False)
    :param status: a status code (not required)
    '''
    if json_response == True:
        if status == None:
            return JsonResponse(response)
        return JsonResponse(response,status=status)
    return response
