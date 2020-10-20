from django.contrib import admin
from django.db import models

from .models import Project, Images
from pagedown.widgets import AdminPagedownWidget

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
	list_display = ('title', 'classes', 'timestamp')

	formfield_overrides = {
		models.TextField : {'widget': AdminPagedownWidget}
	}


@admin.register(Images)
class ImageAdmin(admin.ModelAdmin):
	list_display = ('name', 'project_name', 'timestamp')

	def name(self, obj):
		return obj.image.name
	
	def project_name(self, obj):
		return obj.project.title
