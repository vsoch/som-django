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

from crispy_forms.bootstrap import StrictButton
from crispy_forms.helper import FormHelper

from django.forms import ModelForm, Form
from django import forms

from glob import glob
import os

from {{cookiecutter.project_slug}}.apps.users.models import (
    Team
)


class TeamForm(ModelForm):

    class Meta:
        model = Team
        fields = ("name","team_image",)

    def clean(self):
        cleaned_data = super(TeamForm, self).clean()
        return cleaned_data

    def __init__(self, *args, **kwargs):

        super(TeamForm, self).__init__(*args, **kwargs)
        self.helper = FormHelper(self)
        self.helper.layout = Layout()
        tab_holder = TabHolder()
        self.helper.add_input(Submit("submit", "Save"))
