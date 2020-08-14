from django.shortcuts import render

from django.views.generic import DetailView
from .models import Project
class ProjectDetailView(DetailView):
	model = Project
	context_object_name = 'project'
	template_name = 'projects/detail.html'
