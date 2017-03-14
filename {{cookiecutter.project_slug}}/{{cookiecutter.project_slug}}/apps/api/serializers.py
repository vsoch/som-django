from django.contrib.auth.models import User
from {{cookiecutter.project_slug}}.apps.main.models import *

from rest_framework import serializers

##############################################################################
# Hyperlink Serializers
##############################################################################

class HyperlinkedImageURL(serializers.CharField):
    def to_representation(self, value):
        if value:
            request = self.context.get('request', None)
            return request.build_absolute_uri(value)


class HyperlinkedFileURL(serializers.CharField):
    def to_representation(self,value):
        if value:
            request = self.context.get('request', None)
        return request.build_absolute_uri(value.url)


class SerializedContributors(serializers.CharField):
    def to_representation(self, value):
        if value:
            return ', '.join([v.username for v in value.all()])


class HyperlinkedDownloadURL(serializers.RelatedField):
    def to_representation(self, value):
        if value:
            request = self.context.get('request', None)
            return request.build_absolute_uri(value + "download")


class HyperlinkedRelatedURL(serializers.RelatedField):
    def to_representation(self, value):
        if value:
            request = self.context.get('request', None)
            return request.build_absolute_uri(value.get_absolute_url())


##############################################################################
# Serializers
##############################################################################

class AnnotationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Annotation
        fields = ('id','name','label',)


class CollectionSerializer(serializers.ModelSerializer):
    allowed_annotations = serializers.PrimaryKeyRelatedField(many=True, queryset=Annotation.objects.all())

    class Meta:
        model = Collection
        fields = ('id','name','description','allowed_annotations',)


class EntitySerializer(serializers.ModelSerializer):
    collection = HyperlinkedRelatedURL(read_only=True)

    class Meta:
        model = Entity
        fields = ('id','collection','uid')


class ImageSerializer(serializers.ModelSerializer):
    entity = serializers.PrimaryKeyRelatedField(read_only=True)
    original = HyperlinkedFileURL()

    class Meta:
        model = Image
        fields = ('id','uid','entity','original','slug','metadata')


class ImageMarkupSerializer(serializers.ModelSerializer):
    image = serializers.PrimaryKeyRelatedField(read_only=True)
    base = HyperlinkedImageURL()
    overlay = HyperlinkedImageURL()

    class Meta:
        model = Image
        fields = ('id','image','modify_date','creator','base','overlay','transformation')


class ImageDescriptionSerializer(serializers.ModelSerializer):
    image = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Image
        fields = ('id','image','modify_date','creator','description')



class ImageAnnotationSerializer(serializers.ModelSerializer):
    image = serializers.PrimaryKeyRelatedField(read_only=True)
    annotation = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = ImageAnnotation
        fields = ('id','image','annotation','modify_date','creator','coordinates')


class TextSerializer(serializers.ModelSerializer):
    entity = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Text
        fields = ('id','uid','entity','original','metadata')


class TextMarkupSerializer(serializers.ModelSerializer):
    text = serializers.PrimaryKeyRelatedField(many=True, queryset=Text.objects.all())

    class Meta:
        model = TextMarkup
        fields = ('id','text','modify_date','creator','delimiter','locations')


class TextDescriptionSerializer(serializers.ModelSerializer):
    text = serializers.PrimaryKeyRelatedField(many=True, queryset=Text.objects.all())

    class Meta:
        model = TextDescription
        fields = ('id','text','modify_date','creator','description')


class TextAnnotationSerializer(serializers.ModelSerializer):
    text = serializers.PrimaryKeyRelatedField(read_only=True)
    annotation = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = ImageAnnotation
        fields = ('id','text','annotation','modify_date','creator','coordinates')
