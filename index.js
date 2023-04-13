const menuIcon = document.getElementById('menu-icon');
const navbarMenu = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('show-menu');
});

