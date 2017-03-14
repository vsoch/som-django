from django import template
register = template.Library()

@register.filter(name='divide')
def divide(value, arg):
    value = float(int(value))
    arg = float(int(arg))
    if value == 0 or arg == 0:
        return 0
    return value/arg
    
@register.filter(name='multiply')
def multiply(value, arg):
    return value*arg

@register.filter(name='add_values')
def add_values(value):
    if isinstance(value,list):
        return sum(value)
    elif isinstance(value,dict):
        return (sum(value.values()))
    return None
