from django.conf.urls import url, include
from django.conf import settings
from {{cookiecutter.project_slug}}.apps.users import views as user_views
from social_django import urls as social_urls

urlpatterns = [

    # Twitter, and social auth
    url(r'^login/$', user_views.login, name="login"),
    url(r'^accounts/login/$', user_views.login, name="login"),
    url(r'^home/$', user_views.login),
    url(r'^logout/$', user_views.logout, name="logout"),
    url('', include(social_urls, namespace='social')),

    # Teams
    url(r'^teams$', user_views.view_teams, name="teams"),
    url(r'^users$', user_views.view_users, name="users"),
    url(r'^teams/(?P<tid>.+?)/view$', user_views.view_team, name="team_details"),
    url(r'^teams/(?P<tid>.+?)/edit$', user_views.edit_team, name="edit_team"),
    url(r'^teams/(?P<tid>.+?)/join$', user_views.join_team, name="join_team"),
    url(r'^teams/new$',user_views.edit_team,name='new_team'),
    url(r'^teams/new$',user_views.edit_team,name='new_team'),

]
