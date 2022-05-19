const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const modalWindow = document.querySelector('.modal');
const modalButton1 = document.querySelector('.seeProjBtn1');
const modalButton2 = document.querySelector('.seeProjBtn2');
const closeModal = document.querySelector('.close');

function mobileMenu() {
  /* Open the menu and and change the Hamburger to a X on click */
  if (navMenu.classList.contains('hide')) {
    navMenu.classList.remove('hide');
    hamburger.classList.toggle('active');
  } else {
    navMenu.classList.add('hide');
    hamburger.classList.toggle('active');
  }
}
hamburger.addEventListener('click', mobileMenu);
/* For closing navigation on the click of each link */
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.add('hide');
}));

function modalPopup() {
  /* Open the modal popup window on click */
  if (modalWindow.classList.contains('hide')) {
    modalWindow.classList.remove('hide');
  } else {
    modalWindow.classList.add('hide');
  }
}
/* modalButton.forEach(n => n.addEventListener('click', modalPopup)) */
modalButton1.addEventListener('click', modalPopup);
modalButton2.addEventListener('click', modalPopup);
closeModal.addEventListener('click', modalPopup);
modalWindow.addEventListener('click', (c) => {
  if (c.target.matches('.modal')) {
    modalPopup();
  }
});