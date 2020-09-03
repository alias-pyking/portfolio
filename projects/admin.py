from django.contrib import admin
from django.db import models

from .models import Project, Images
from pagedown.widgets import AdminPagedownWidget

class ProjectAdmin(admin.ModelAdmin):
	list_display = ['title','timestamp']
	formfield_overrides = {
		models.TextField : {'widget': AdminPagedownWidget}
	}


admin.site.register(Project, ProjectAdmin)
admin.site.register(Images)

