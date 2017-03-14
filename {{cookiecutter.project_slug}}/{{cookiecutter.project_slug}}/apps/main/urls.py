from django.conf.urls import url
from django.views.generic.base import TemplateView
import {{cookiecutter.project_slug}}.apps.main.views as main_views
import {{cookiecutter.project_slug}}.apps.main.actions as actions

urlpatterns = [

    # Collections and entities
    url(r'^collections$', main_views.view_collections, name="collections"),
    url(r'^entity/(?P<eid>.+?)/details$',main_views.view_entity,name='entity_details'),
    url(r'^entity/(?P<eid>.+?)/update/status$',actions.update_entity_status,name='update_entity_status'),

    # Collections
    url(r'^collections/(?P<cid>\d+)/$',main_views.view_collection,name='collection_details'),
    url(r'^collections/(?P<cid>\d+)/explorer$',main_views.collection_explorer,name='collection_explorer'),
    url(r'^collections/(?P<cid>\d+)/stats/(?P<fieldtype>.+?)/detail$',main_views.collection_stats_detail,name='collection_stats_detail'),
    url(r'^collections/(?P<cid>\d+)/stats/$',main_views.collection_stats,name='collection_stats'),
    url(r'^collections/(?P<cid>\d+)/entities/delete$',main_views.delete_collection_entities,name='delete_collection_entities'),
    url(r'^collections/(?P<cid>\d+)/delete$',main_views.delete_collection,name='delete_collection'),
    url(r'^collections/(?P<cid>\d+)/edit$',main_views.edit_collection,name='edit_collection'),
    #url(r'^collections/(?P<cid>.+?)/entities/upload$',main_views.upload_entities,name='upload_entities'),
    url(r'^collections/new$',main_views.edit_collection,name='new_collection'),
    url(r'^collections/my$',main_views.my_collections,name='my_collections'),

    # Collection Annotation/Markup Portal
    url(r'^collections/(?P<cid>\d+)/start$',main_views.collection_start,name='collection_start'), # all options
    url(r'^collections/(?P<cid>\d+)/instruction/update$',actions.collection_update_instruction,name='collection_update_instruction'),
    url(r'^collections/(?P<cid>\d+)/activate$',main_views.collection_activate,name='collection_activate'),
    url(r'^collections/(?P<cid>\d+)/(?P<fieldtype>.+?)/activate$',main_views.collection_activate,name='collection_activate'),
    url(r'^images/(?P<uid>\d+)/metadata$',actions.serve_image_metadata,name='serve_image_metadata'),
    url(r'^text/(?P<uid>\d+)/metadata$',actions.serve_text_metadata,name='serve_text_metadata'),
    url(r'^text/(?P<uid>\d+)/original$',actions.serve_text,name='serve_text'),

    # Annotation Labels
    url(r'^labels/(?P<cid>\d+)/new$',main_views.create_label,name='create_label'), # create new label
    url(r'^labels/(?P<cid>\d+)/(?P<lid>.+?)/new$',main_views.create_label,name='create_label'), # from existing
    url(r'^labels/(?P<cid>\d+)/view$',main_views.view_label,name='view_label'), # create new label
    url(r'^labels/(?P<cid>\d+)/(?P<lid>.+?)/remove$',main_views.remove_label,name='remove_label'), # from existin

    # Change / add contributors
    url(r'^contributors/(?P<cid>\d+)/(?P<uid>.+?)/remove$',main_views.remove_contributor,name='remove_contributor'),
    url(r'^contributors/(?P<cid>\d+)/add$',main_views.add_contributor,name='add_contributor'),
    url(r'^contributors/(?P<cid>\d+)/edit$',main_views.edit_contributors,name='edit_contributors'),

    # Image markup and annotation
    url(r'^collections/(?P<cid>\d+)/images/markup$',main_views.collection_markup_image,name='collection_markup_image'),
    url(r'^collections/(?P<cid>\d+)/images/describe$',main_views.collection_describe_image,name='collection_describe_image'),
    url(r'^collections/(?P<cid>\d+)/images/(?P<uid>.+?)/markup$',main_views.markup_image,name='markup_image'),
    url(r'^entity/(?P<uid>\d+)/images/describe$',main_views.describe_image,name='describe_image'),
    url(r'^collections/(?P<cid>\d+)/images/annotate$',main_views.collection_annotate_image,name='collection_annotate_image'),

    # Update Annotations and Markup
    url(r'^entity/(?P<uid>\d+)/images/annotate/update$',main_views.update_image_annotation,name='update_image_annotation'),
    url(r'^entity/(?P<uid>\d+)/images/annotate/clear$',main_views.clear_image_annotations,name='clear_image_annotations'),
    url(r'^entity/(?P<uid>\d+)/text/annotate/update$',main_views.update_text_annotation,name='update_text_annotation'),
    url(r'^entity/(?P<uid>\d+)/text/annotate/clear$',main_views.clear_text_annotations,name='clear_text_annotations'),
    url(r'^entity/(?P<uid>\d+)/text/markup/update$',actions.update_text_markup,name='update_text_markup'),
    
    # Text markup and annotation
    url(r'^collections/(?P<cid>\d+)/text/markup$',main_views.collection_markup_text,name='collection_markup_text'),
    url(r'^collections/(?P<cid>\d+)/text/describe$',main_views.collection_describe_text,name='collection_describe_text'),
    url(r'^collections/(?P<cid>\d+)/text/annotate$',main_views.collection_annotate_text,name='collection_annotate_text'),
    url(r'^entity/(?P<uid>\d+)/text/describe$',main_views.describe_text,name='describe_text'),
    url(r'^collections/(?P<cid>\d+)/text/(?P<uid>.+?)/markup$',main_views.markup_text,name='markup_text'),

]
