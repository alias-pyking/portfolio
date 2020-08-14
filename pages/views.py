from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from projects.views import Project
from .models import AboutDescription, ContactDescription
from .forms import ContactForm
from django.template.loader import get_template
from django.core.mail import EmailMessage
from django.contrib import messages
from django.shortcuts import redirect
class HomeView(ListView):
	model = Project
	context_object_name = 'projects'
	template_name = 'home.html'

class AboutView(TemplateView):
	template_name = 'about.html'
	context_object_name = 'about'
	def get_context_data(self, **kwargs):
		context = super().get_context_data(**kwargs)
		context['about'] = AboutDescription.objects.latest('timestamp')
		return context


def contact(request):
	form_class = ContactForm
	if request.method == 'POST':
		form = form_class(data=request.POST)
		if form.is_valid():
			contact_name = request.POST['name']
			contact_email = request.POST['email']
			content = request.POST['content']

			template = get_template('contact_template.txt')
			context = {
				'contact_name': contact_name,
				'contact_email': contact_email,
				'form_content':content
			}
			content = template.render(context)
			email = EmailMessage("New Email from portfolio", content, 'Shubham-Portfolio', ['shubhamkumar7051@gmail.com'], headers={'Reply-To': contact_email})
			email.send()
			messages.success(request,'Thanks for getting in touch.')
			return redirect('contact')
		else:
			messages.error(request, 'Unable to send email make sure all the fields are correct')
			return redirect('contact')
	context = {
		'form': form_class,
		'contact': ContactDescription.objects.latest('timestamp'),
		}
	return render(request,'contact.html',context=context)
	