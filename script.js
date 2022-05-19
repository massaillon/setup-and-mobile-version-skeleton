/* Constants declarations for the Mobile menu */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
/* Constants declarations for the Modal popUp */
const modalWindow = document.querySelector('.modal');
const modalWindow2 = document.querySelector('.modal2');
const modalWindow3 = document.querySelector('.modal3');
const modalWindow4 = document.querySelector('.modal4');
const modalButton1 = document.querySelector('.seeProjBtn1');
const modalButton2 = document.querySelector('.seeProjBtn2');
const modalButton3 = document.querySelector('.seeProjBtn3');
const modalButton4 = document.querySelector('.seeProjBtn4');
const closeModal = document.querySelector('.close');
const closeModal2 = document.querySelector('.close2');
const closeModal3 = document.querySelector('.close3');
const closeModal4 = document.querySelector('.close4');

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

/* the function below opens and closes the modal popup window on click */
function modalPopup() {
  if (modalWindow.classList.contains('hide')) {
    modalWindow.classList.remove('hide');
  } else {
    modalWindow.classList.add('hide');
  }
}

function modalPopup2() {
  if (modalWindow2.classList.contains('hide')) {
    modalWindow2.classList.remove('hide');
  } else {
    modalWindow2.classList.add('hide');
  }
}

function modalPopup3() {
  if (modalWindow3.classList.contains('hide')) {
    modalWindow3.classList.remove('hide');
  } else {
    modalWindow3.classList.add('hide');
  }
}

function modalPopup4() {
  if (modalWindow4.classList.contains('hide')) {
    modalWindow4.classList.remove('hide');
  } else {
    modalWindow4.classList.add('hide');
  }
}
/* Button settings for the eventLitener */
modalButton1.addEventListener('click', modalPopup);
modalButton2.addEventListener('click', modalPopup2);
modalButton3.addEventListener('click', modalPopup3);
modalButton4.addEventListener('click', modalPopup4);
closeModal.addEventListener('click', modalPopup);
closeModal2.addEventListener('click', modalPopup2);
closeModal3.addEventListener('click', modalPopup3);
closeModal4.addEventListener('click', modalPopup4);

/* the function below closes the modal popup window on click anywhere in the modal */
modalWindow.addEventListener('click', (a) => {
  if (a.target.matches('.modal')) {
    modalPopup();
  }
});

modalWindow2.addEventListener('click', (b) => {
  if (b.target.matches('.modal2')) {
    modalPopup2();
  }
});

modalWindow3.addEventListener('click', (c) => {
  if (c.target.matches('.modal3')) {
    modalPopup3();
  }
});

modalWindow4.addEventListener('click', (d) => {
  if (d.target.matches('.modal4')) {
    modalPopup4();
  }
});