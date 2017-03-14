"""URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
"""
from django.conf.urls import include, url
from {{cookiecutter.project_slug}}.apps.base import urls as base_urls
from {{cookiecutter.project_slug}}.apps.main import urls as main_urls
from {{cookiecutter.project_slug}}.apps.users import urls as user_urls
from {{cookiecutter.project_slug}}.apps.api import urls as api_urls
from {{cookiecutter.project_slug}}.apps.storage import urls as storage_urls

from django.contrib import admin
#from django.contrib.sitemaps.views import sitemap, index

# Configure custom error pages
from django.conf.urls import ( handler404, handler500 )
handler404 = '{{cookiecutter.project_slug}}.apps.base.views.handler404'
handler500 = '{{cookiecutter.project_slug}}.apps.base.views.handler500'

# Sitemaps
#from {{cookiecutter.project_slug}}.apps.api.sitemap import CollectionSitemap, ReportSitemap
#sitemaps = {"reports":ReportSitemap,
#            "collections":CollectionSitemap}

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(base_urls)),
    url(r'^api/', include(api_urls)),
    url(r'^', include(main_urls)),
    url(r'^', include(user_urls)),
    url(r'^upload/', include(storage_urls)),
#    url(r'^sitemap\.xml$', index, {'sitemaps': sitemaps}, name="sitemap"),
#    url(r'^sitemap-(?P<section>.+)\.xml$', sitemap, {'sitemaps': sitemaps},
#        name='django.contrib.sitemaps.views.sitemap'),
]
