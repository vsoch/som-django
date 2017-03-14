from {{cookiecutter.project_slug}}.settings import (
    DOMAIN_NAME,
    DISQUS_NAME
)

def domain_processor(request):
    return {'domain': DOMAIN_NAME}

def disqus_processor(request):
    return {'DISQUS_NAME': DISQUS_NAME}
