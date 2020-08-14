from django import forms
from projects.models import Project

class ContactForm(forms.Form):
	name = forms.CharField(max_length=200, required=True)
	email = forms.EmailField(max_length=200, required=True)
	content = forms.CharField(required=True,widget=forms.Textarea, label='Message')
