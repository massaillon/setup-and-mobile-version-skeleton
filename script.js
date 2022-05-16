const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const blurAll = document.querySelector('blur');
function mobileMenu() {
  /* Open the menu and and change the Hamburger to a X on click */
  if (navMenu.classList.contains('hide')) {
    navMenu.classList.remove('hide');
    hamburger.classList.toggle('active');
  } else {
    navMenu.classList.add('hide');
    hamburger.classList.toggle('active');
    blurAll.classList.remove('blur');
  }
}
hamburger.addEventListener('click', mobileMenu);
/* For closing navigation on the click of each link */
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.add('hide');
}));