const path = window.location.pathname;
const filters = document.getElementById('pfilters');

const allFilterButton = document.getElementById('all-filter');
const djangoFilterButton = document.getElementById('django-filter');
const reactFilterButton = document.getElementById('react-filter');
const androidFilterButton = document.getElementById('android-filter');
const aiFilterButton = document.getElementById('ai-filter');
const buttons = [allFilterButton, djangoFilterButton, reactFilterButton, androidFilterButton, aiFilterButton];
if (path === '/') {
	const homeElement = document.getElementById('home');
	const sidebarElements = document.getElementsByClassName('sidebar-link');
	for (const element of sidebarElements) {
		element.className = 'sidebar-link';
	}
	homeElement.classList.add('active');
	filters.style.display = 'block';
} else if (path == '/about/') {
	const aboutElement = document.getElementById('about');
	const sidebarElements = document.getElementsByClassName('sidebar-link');
	for (const element of sidebarElements) {
		element.className = 'sidebar-link';
	}
	aboutElement.classList.add('active');
	filters.style.display = 'none';
} else if (path == '/contact/') {
	const contactElement = document.getElementById('contact');
	const sidebarElements = document.getElementsByClassName('sidebar-link');
	for (const element of sidebarElements) {
		element.className = 'sidebar-link';
	}
	contactElement.classList.add('active');
	filters.style.display = 'none';
}
// applying filters

allFilterButton.addEventListener('click', (event) => {
	for (const button of buttons) {
		if (button.classList.contains('btn-dark')) {
			button.classList.remove('btn-dark');
		}
	}
	allFilterButton.classList = [...allFilterButton.classList, 'btn-dark'].join(' ');
	const allProjects = document.getElementsByClassName('all-project');
	for (const project of allProjects) {
		if (project.classList.contains('invisible')) {
			project.classList.remove('invisible');
		}
	}
});

djangoFilterButton.addEventListener('click', (event) => {
	for (const button of buttons) {
		if (button.classList.contains('btn-dark')) {
			button.classList.remove('btn-dark');
		}
	}
	djangoFilterButton.classList = [...djangoFilterButton.classList, 'btn-dark'].join(' ');
	const allProjects = document.getElementsByClassName('all-project');
	for (const project of allProjects) {
		const classes = project.classList;
		if (!classes.contains('django')) {
			if (classes.contains('invisible')) {
				continue;
			} else {
				project.classList = [...project.classList, 'invisible'].join(' ');
			}
		} else if(project.classList.contains('invisible')) {
			project.classList.remove('invisible');
		}
	}
});
reactFilterButton.addEventListener('click', (event) => {
	for (const button of buttons) {
		if (button.classList.contains('btn-dark')) {
			button.classList.remove('btn-dark');
		}
	}
	reactFilterButton.classList = [...djangoFilterButton.classList, 'btn-dark'].join(' ');
	const allProjects = document.getElementsByClassName('all-project');
	for (const project of allProjects) {
		const classes = project.classList;
		if (!classes.contains('react')) {
			if (classes.contains('invisible')) {
				continue;
			} else {
				project.classList = [...project.classList, 'invisible'].join(' ');
			}
		} else if(project.classList.contains('invisible')) {
			project.classList.remove('invisible');
		}
	}
});

androidFilterButton.addEventListener('click', (event) => {
	for (const button of buttons) {
		if (button.classList.contains('btn-dark')) {
			button.classList.remove('btn-dark');
		}
	}
	androidFilterButton.classList = [...djangoFilterButton.classList, 'btn-dark'].join(' ');
	const allProjects = document.getElementsByClassName('all-project');
	for (const project of allProjects) {
		const classes = project.classList;
		if (!classes.contains('android')) {
			if (classes.contains('invisible')) {
				continue;
			} else {
				project.classList = [...project.classList, 'invisible'].join(' ');
			}
		} else if(project.classList.contains('invisible')) {
			project.classList.remove('invisible');
		}
	}
});
aiFilterButton.addEventListener('click', (event) => {
	for (const button of buttons) {
		if (button.classList.contains('btn-dark')) {
			button.classList.remove('btn-dark');
		}
	}
	aiFilterButton.classList = [...djangoFilterButton.classList, 'btn-dark'].join(' ');
	const allProjects = document.getElementsByClassName('all-project');
	for (const project of allProjects) {
		const classes = project.classList;
		if (!classes.contains('ai')) {
			if (classes.contains('invisible')) {
				continue;
			} else {
				project.classList = [...project.classList, 'invisible'].join(' ');
			}
		} else if(project.classList.contains('invisible')) {
			project.classList.remove('invisible');
		}
	}
});