from django.contrib import admin
from .models import AboutDescription, ContactDescription,Experience
from pagedown.widgets import AdminPagedownWidget
from django.db import models
class AboutDescriptionAdmin(admin.ModelAdmin):
	formfield_overrides = {
		models.TextField : {'widget':AdminPagedownWidget}
	}

admin.site.register(AboutDescription, AboutDescriptionAdmin)

class ContactDescriptionAdmin(admin.ModelAdmin):
	formfield_overrides = {
		models.TextField : {'widget':AdminPagedownWidget}
	}


admin.site.register(ContactDescription, ContactDescriptionAdmin)


class ExperienceAdmin(admin.ModelAdmin):
	formfield_overrides = {
		models.TextField: {'widget': AdminPagedownWidget}
	}
admin.site.register(Experience, ExperienceAdmin)