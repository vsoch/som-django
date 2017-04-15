FROM python:3.5.1
ENV PYTHONUNBUFFERED 1
RUN apt-get update && apt-get install -y \
    libopenblas-dev \
    gfortran \
    libhdf5-dev \
    pkg-config \
    libxmlsec1-dev \
    libhdf5-dev \
    libgeos-dev \
    build-essential \
    openssl \
    nginx \
    vim \
    wget

RUN pip install --upgrade pip
RUN pip install numpy \
    cython
RUN pip install -v scipy
RUN pip install numpy
RUN pip install scikit-learn pandas h5py matplotlib
RUN pip install uwsgi
RUN pip install 'Django==1.10.2'
RUN pip install social-auth-app-django
RUN pip install social-auth-core[saml]
RUN pip install djangorestframework
RUN pip install django-rest-swagger
RUN pip install markdown
RUN pip install django-filter
RUN pip install django-taggit
RUN pip install django-form-utils
RUN pip install django-crispy-forms
RUN pip install django-taggit-templatetags
RUN pip install django-dirtyfields
RUN pip install 'dropbox==1.6'
RUN pip install 'django-dbbackup<2.3'
RUN pip install psycopg2
RUN pip install cython
RUN pip install h5py
RUN pip install matplotlib
RUN pip install scipy
RUN pip install numexpr
RUN pip install lxml
RUN pip install shapely
RUN pip install Pillow
RUN pip install requests
RUN pip install requests-oauthlib
RUN pip install python-openid
RUN pip install django-sendfile
RUN pip install django-polymorphic
RUN pip install celery[redis]==3.1.25
RUN pip install django-celery
RUN pip install scikit-learn
RUN pip install django-cleanup
RUN pip install opbeat
RUN pip install 'django-hstore==1.3.5'
RUN pip install django-datatables-view
RUN pip install django-oauth-toolkit
RUN pip install simplejson
RUN pip install django-gravatar2
RUN pip install pygments
RUN pip install django-notifications-hq
RUN pip install social-auth-app-django
RUN pip install som
RUN pip install sendgrid

RUN mkdir /code
RUN mkdir -p /var/www/images
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
RUN /usr/bin/yes | pip uninstall cython
RUN apt-get remove -y gfortran

RUN apt-get autoremove -y
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ADD . /code/
CMD /code/run_uwsgi.sh

EXPOSE 3031
