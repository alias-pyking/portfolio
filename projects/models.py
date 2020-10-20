from django.db import models
from django.urls import reverse
from PIL import Image
from markdown_deux import markdown
from django.utils.safestring import mark_safe

def upload_location(instance, filename):
	print(instance)
	return "projects/{}".format(filename)



class Project(models.Model):
	title = models.CharField(max_length = 200)
	thum = models.ImageField(upload_to=upload_location)
	description = models.CharField(max_length=200, null = True, blank = True)
	content = models.TextField()
	timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)
	classes = models.CharField(max_length=200, null=True, blank = True)
	def __str__(self):
		return str(self.title)
	
	def get_absolute_url(self):
		return reverse('detail', kwargs={'pk': self.pk})
	
	def get_markdown(self):
		content = self.content
		markdown_text = markdown(content)
		return mark_safe(markdown_text)

	# def save(self, *args, **kwargs):
	# 	super().save(*args, **kwargs)
	# 	img = Image.open(self.thum.path)
	# 	img = img.resize((600, 400))
	# 	img.save(self.thum.path)

class Images(models.Model):
	project = models.ForeignKey(Project, on_delete= models.CASCADE)
	image = models.ImageField(upload_to=upload_location, null=True, blank=True)
	timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)

	def __str__(self):
		return self.image.name

	# def save(self, *args, **kwargs):
	# 	super().save(*args, **kwargs)
	# 	img = Image.open(self.image.path)
	# 	img = img.resize((900, 400))
	# 	img.save(self.image.path)

