#!/bin/bash

cookiecutter --no-input /code
cp -R /code/* /build/
rm -rf /build/\{\{cookiecutter.project_slug\}\}/
rm /build/run_build.sh
rm /build/Dockerfile
rm /build/LICENSE
#TODO: generate secret key here
chmod -R 775 /build
# after this, likely need to chown directory to user
