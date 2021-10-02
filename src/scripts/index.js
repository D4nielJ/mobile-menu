const menuIcons = document.querySelector('.icon-container');
const burguerIcon = document.querySelector('.burguer-icon');
const closeIcon = document.querySelector('.x-icon');
const navMenu = document.querySelector('.nav-menu');
const menuLinks = document.querySelectorAll('.nav-menu > ul > li');

const toggleMenu = () => {
  navMenu.classList.toggle('nav-menu--active');
  burguerIcon.classList.toggle('burguer-icon--hidden');
  closeIcon.classList.toggle('x-icon--hidden');
};

menuIcons.addEventListener('click', () => {
  toggleMenu();
});

menuLinks.map((link) => link.addEventListener('click', () => {
  toggleMenu();
}));
