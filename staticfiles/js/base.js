const path = window.location.pathname;
const filters = document.getElementById('filters');

const allFilterButton = document.getElementById('all-filter');
const djangoFilterButton = document.getElementById('django-filter');
const reactFilterButton = document.getElementById('react-filter');
const androidFilterButton = document.getElementById('android-filter');
const aiFilterButton = document.getElementById('ai-filter');
const buttons = [allFilterButton, djangoFilterButton, reactFilterButton, androidFilterButton, aiFilterButton];


function clearButtonClasses() {
	buttons.forEach(buttons => {
		buttons.className = 'badge';
	});
}

allFilterButton.addEventListener('click', () => {
	const projects = document.querySelectorAll('.project');
	projects.forEach(project => {
		project.style.display = 'block';
	});
	clearButtonClasses();
	allFilterButton.className = 'badge active';
});
djangoFilterButton.addEventListener('click', () => {
	
	const projects = document.querySelectorAll('.project');
	projects.forEach(project => {
		if (!project.classList.contains('django')) {
			project.style.display = 'none';
		} else {
			project.style.display = 'block';
		}
	});
	clearButtonClasses();
	djangoFilterButton.className = "badge active";

});


reactFilterButton.addEventListener('click', () => {
	const projects = document.querySelectorAll('.project');
	projects.forEach(project => {
		if (!project.classList.contains('react')) {
			project.style.display = 'none';
		} else {
			project.style.display = 'block';
		}
	});
	clearButtonClasses();
	reactFilterButton.className = "badge active";

});

aiFilterButton.addEventListener('click', () => {
	const projects = document.querySelectorAll('.project');
	projects.forEach(project => {
		if (!project.classList.contains('ai')) {
			project.style.display = 'none';
		} else {
			project.style.display = 'block';
		}
	});
	clearButtonClasses();
	aiFilterButton.className = "badge active";

});
androidFilterButton.addEventListener('click', () => {
	const projects = document.querySelectorAll('.project');
	projects.forEach(project => {
		if (!project.classList.contains('android')) {
			project.style.display = 'none';
		} else {
			project.style.display = 'block';
		}
	});
	clearButtonClasses();
	androidFilterButton.className = "badge active";

});

if (path === '/') {
	const homeElement = document.getElementById('home');
	const sidebarElements = document.getElementsByClassName('sidebar-link');
	for (const element of sidebarElements) {
		element.className = 'sidebar-link';
	}
	homeElement.classList.add('active');
	filters.style.display = 'flex';
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
} else {
	filters.style.display = 'none';
}

// sidenavigation responsive functionality

const menuButton = document.getElementById('menu-btn');

menuButton.addEventListener('click', (event) => {
	const sideBar = document.getElementById('sidebar');
	sideBar.style.width = "50vw";
	sideBar.style.display = "block";
	sideBar.style.opacity = "1";
	sideBar.style.background = "#fdfdfd";
	sideBar.style.zIndex = "4";
	let links = sideBar.getElementsByTagName('a');
	let pEls = sideBar.getElementsByTagName('p');
	let elements = [...links, ...pEls];
	elements = Array.from(elements);
	elements.forEach(elem => {
		elem.style.display = 'block';
	});
	document.querySelector('.profile').style.display = 'block';
});

function closeNav() {
	const sideBar = document.getElementById('sidebar');
	sideBar.style.width = "0";
	const aEls = sideBar.getElementsByTagName('a');
	const pEls = sideBar.getElementsByTagName('p');
	const elements = [...aEls, ...pEls];
	elements.forEach(elem => {
		elem.style.display = 'none';
	});
	document.querySelector('.profile').style.display = 'none';
}

// Code for image slider from w3school camp

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("slide");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}	


// 