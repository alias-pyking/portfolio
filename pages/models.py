from django.db import models

# Create your models here.
class AboutDescription(models.Model):
	content = models.TextField()
	timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)


class ContactDescription(models.Model):
	content = models.TextField()
	timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)

