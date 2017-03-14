#!/bin/bash
python manage.py makemigrations base
python manage.py makemigrations users
python manage.py makemigrations main
python manage.py makemigrations
python manage.py migrate auth
python manage.py migrate
python manage.py collectstatic --noinput
uwsgi uwsgi.ini
