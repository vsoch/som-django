from django.views.generic.base import (
    TemplateView,
    RedirectView
)
from django.conf.urls import include, url
import notifications.urls
import {{cookiecutter.project_slug}}.apps.base.views as base_views

favicon_view = RedirectView.as_view(url='/static/img/favicon/favicon.ico', 
                                    permanent=True)

urlpatterns = [
    url(r'^$', base_views.index_view, name="index"),
    url(r'^about$', base_views.about_view, name="about"),
    url(r'^guide$', base_views.user_guide_view, name="user_guide"),
    url(r'^favicon\.ico$', favicon_view),
    url(r'^notifications/', include(notifications.urls,namespace='notifications'))
]
