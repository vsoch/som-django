from crispy_forms.layout import (
    Button, 
    Div, 
    Field, 
    Hidden,
    HTML, 
    Layout, 
    Row, 
    Submit
)

from crispy_forms.bootstrap import (
    AppendedText, 
    FormActions, 
    PrependedText, 
    Tab,
    TabHolder
)

from {{cookiecutter.project_slug}}.apps.main.models import (
    Collection
)

from crispy_forms.bootstrap import StrictButton
from crispy_forms.helper import FormHelper

from django.forms import ModelForm, Form
from django import forms

from glob import glob
import os


class CollectionForm(ModelForm):

    class Meta:
        model = Collection
        fields = ("name","description",)

    def __init__(self, *args, **kwargs):

        super(CollectionForm, self).__init__(*args, **kwargs)
        self.helper = FormHelper(self)
        self.helper.form_class = 'form-horizontal'
        self.helper.layout = Layout()
        tab_holder = TabHolder()
        self.helper.add_input(Submit("submit", "Save"))
