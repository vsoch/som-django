from django import template
register = template.Library()

@register.filter(name='replace')
def replace(value, arg):
    replace_this,replace_with = arg.split(',')
    return value.replace(replace_this,replace_with)
