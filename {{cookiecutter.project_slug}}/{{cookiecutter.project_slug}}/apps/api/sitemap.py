from django.contrib.sitemaps import Sitemap
from {{cookiecutter.project_slug}}.apps.main.models import Collection

class BaseSitemap(Sitemap):
    priority = 0.5
    def location(self,obj):
        return obj.get_absolute_url()


class CollectionSitemap(BaseSitemap):
    changefreq = "weekly"
    def items(self):
        return [x for x in Collection.objects.all() if x.collection.private == False]
