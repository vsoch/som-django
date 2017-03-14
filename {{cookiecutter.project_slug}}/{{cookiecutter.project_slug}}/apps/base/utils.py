#!/usr/bin/env python

import {{cookiecutter.project_slug}}.apps.base.__init__ as hello
from django.contrib import messages
import subprocess
import collections
import simplejson
import tempfile
import zipfile
import shutil
import sys
import os
import re

# Python less than version 3 must import OSError
if sys.version_info[0] < 3:
    from exceptions import OSError

def get_installdir():
    '''get_installdir returns the installation directory of the application
    '''
    return os.path.abspath(os.path.dirname(hello.__file__))

def parse_numeric_input(request,value,default,description):
    '''parse_numeric_input will attempt to parse some value
    as numeric input, and catch the error with a messages
    to the user if it fails
    :param request: the request object
    :param value: the value to try to parse (usually from POST)
    :param default: the default value to use
    :param description: a description to provide to the user
    '''
    if description == None:
        description = ''
    try:        
        value = int(re.sub('[^0-9]','',value))
    except:
        value = default
        messages.info(request,"We had trouble parsing %s. It has been set to a default of %s" %(description,value))
    return request,value


def run_command(cmd,error_message=None,sudopw=None,suppress=False):
    '''run_command uses subprocess to send a command to the terminal.
    :param cmd: the command to send, should be a list for subprocess
    :param error_message: the error message to give to user if fails, 
    if none specified, will alert that command failed.
    :param execute: if True, will add `` around command (default is False)
    :param sudopw: if specified (not None) command will be run asking for sudo
    '''
    if sudopw != None:
        cmd = ' '.join(["echo", sudopw,"|","sudo","-S"] + cmd)
        if suppress == False:
            output = os.popen(cmd).read().strip('\n')
        else:
            output = cmd
            os.system(cmd)
    else:
        try:
            process = subprocess.Popen(cmd,stdout=subprocess.PIPE)
            output, err = process.communicate()
        except OSError as error: 
            if error.errno == os.errno.ENOENT:
                print(error_message)
            else:
                print(err)
            return None
    
    return output


############################################################################
## FILE OPERATIONS #########################################################
############################################################################

def zip_up(file_list,zip_name,output_folder=None):
    '''zip_up will zip up some list of files into a package (.zip)
    :param file_list: a list of files to include in the zip.
    :param output_folder: the output folder to create the zip in. If not 
    :param zip_name: the name of the zipfile to return.
    specified, a temporary folder will be given.
    '''
    tmpdir = tempfile.mkdtemp()
   
    # Make a new archive    
    output_zip = "%s/%s" %(tmpdir,zip_name)
    zf = zipfile.ZipFile(output_zip, "w", zipfile.ZIP_DEFLATED, allowZip64=True)

    # Write files to zip, depending on type
    for filename,content in file_list.iteritems():

        print("Adding %s to package..." %(filename))

        # If it's the files list, move files into the archive
        if filename.lower() == "files":
            if not isinstance(content,list): 
                content = [content]
            for copyfile in content:
                zf.write(copyfile,os.path.basename(copyfile))
        # If it's a list, write to new file, and save
        elif isinstance(content,list):
            filey = write_file("%s/%s" %(tmpdir,filename),"\n".join(content))
            zf.write(filey,filename)
            os.remove(filey)
        # If it's a dict, save to json
        elif isinstance(content,dict):
            filey = write_json(content,"%s/%s" %(tmpdir,filename))
            zf.write(filey,filename)
            os.remove(filey)
        # If it's a string, do the same
        elif isinstance(content,str):
            filey = write_file("%s/%s" %(tmpdir,filename),content)
            zf.write(filey,filename)
            os.remove(filey)
        # Otherwise, just write the content into a new archive
        else: 
            zf.write(content,filename)

    # Close the zip file    
    zf.close()

    if output_folder != None:
        shutil.copyfile(output_zip,"%s/%s"%(output_folder,zip_name))
        shutil.rmtree(tmpdir)
        output_zip = "%s/%s"%(output_folder,zip_name)

    return output_zip


def write_file(filename,content,mode="w"):
    '''write_file will open a file, "filename" and write content, "content"
    and properly close the file
    '''
    with open(filename,mode) as filey:
        filey.writelines(content)
    return filename


def write_json(json_obj,filename,mode="w",print_pretty=True):
    '''write_json will (optionally,pretty print) a json object to file
    :param json_obj: the dict to print to json
    :param filename: the output file to write to
    :param pretty_print: if True, will use nicer formatting   
    '''
    with open(filename,mode) as filey:
        if print_pretty == True:
            filey.writelines(simplejson.dumps(json_obj, indent=4, separators=(',', ': ')))
        else:
            filey.writelines(simplejson.dumps(json_obj))
    return filename


def read_file(filename,mode="rb"):
    '''write_file will open a file, "filename" and write content, "content"
    and properly close the file
    '''
    with open(filename,mode) as filey:
        content = filey.readlines()
    return content

def remove_unicode_dict(input_dict):
    '''remove unicode keys and values from dict, encoding in utf8
    '''
    if isinstance(input_dict, basestring):
        return str(input_dict)
    elif isinstance(input_dict, collections.Mapping):
        return dict(map(remove_unicode_dict, input_dict.iteritems()))
    elif isinstance(input_dict, collections.Iterable):
        return type(input_dict)(map(remove_unicode_dict, input_dict))
    else:
        return input_dict
