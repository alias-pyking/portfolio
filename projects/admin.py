from django.contrib import admin
from django.db import models
from django.utils.translation import ugettext_lazy as _
from .models import Project, Images
from pagedown.widgets import AdminPagedownWidget


class InputFilter(admin.SimpleListFilter):
	template = 'admin/input_filter.html'

	def lookups(self, request, model_admin):
		return ((),)

	def choices(self, changelist):
		# Grab only the "all" option.
		all_choice = next(super().choices(changelist))
		all_choice['query_parts'] = (
			(k, v)
			for k, v in changelist.get_filters_params().items()
			if k != self.parameter_name
		)
		yield all_choice

class FilterImagesByProjectId(InputFilter):
	parameter_name = 'project_id'
	title = _('Project Name')

	def queryset(self, request, queryset):
		if self.value() is not None:
			project_id = self.value()
			return queryset.filter(project=int(project_id))


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
	list_display = ('title', 'classes', 'timestamp')

	formfield_overrides = {
		models.TextField : {'widget': AdminPagedownWidget}
	}


@admin.register(Images)
class ImageAdmin(admin.ModelAdmin):
	list_display = ('name', 'project_name', 'timestamp')
	list_filter = (FilterImagesByProjectId, )

	def name(self, obj):
		return obj.image.name
	
	def project_name(self, obj):
		return obj.project.title
