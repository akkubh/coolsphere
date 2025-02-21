const coolSphere = document.querySelector('.cool-sphere');
const scrollingContainer = document.querySelector('.scrolling-container');

coolSphere.style.top = (window.innerHeight / 2) - (coolSphere.offsetHeight / 2) + 'px';
coolSphere.style.left = (window.innerWidth / 2) - (coolSphere.offsetWidth / 2) + 'px';

scrollingContainer.addEventListener('scroll', () => {
	coolSphere.style.top = (window.innerHeight / 2) - (coolSphere.offsetHeight / 2) + 'px';
	coolSphere.style.left = (window.innerWidth / 2) - (coolSphere.offsetWidth / 2) + 'px';
});