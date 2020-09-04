// const path = window.location.pathname;
// const filters = document.getElementById('pfilters');

// const allFilterButton = document.getElementById('all-filter');
// const djangoFilterButton = document.getElementById('django-filter');
// const reactFilterButton = document.getElementById('react-filter');
// const androidFilterButton = document.getElementById('android-filter');
// const aiFilterButton = document.getElementById('ai-filter');
// const buttons = [allFilterButton, djangoFilterButton, reactFilterButton, androidFilterButton, aiFilterButton];
// if (path === '/') {
// 	const homeElement = document.getElementById('home');
// 	const sidebarElements = document.getElementsByClassName('sidebar-link');
// 	for (const element of sidebarElements) {
// 		element.className = 'sidebar-link';
// 	}
// 	homeElement.classList.add('active');
// 	filters.style.display = 'block';
// } else if (path == '/about/') {
// 	const aboutElement = document.getElementById('about');
// 	const sidebarElements = document.getElementsByClassName('sidebar-link');
// 	for (const element of sidebarElements) {
// 		element.className = 'sidebar-link';
// 	}
// 	aboutElement.classList.add('active');
// 	filters.style.display = 'none';
// } else if (path == '/contact/') {
// 	const contactElement = document.getElementById('contact');
// 	const sidebarElements = document.getElementsByClassName('sidebar-link');
// 	for (const element of sidebarElements) {
// 		element.className = 'sidebar-link';
// 	}
// 	contactElement.classList.add('active');
// 	filters.style.display = 'none';
// }

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

// 
