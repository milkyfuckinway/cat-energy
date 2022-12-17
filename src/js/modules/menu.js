const menuButton = document.querySelector('.main-header__menu-button');
const nav = document.querySelector('.main-nav');
const mainHeader = document.querySelector('.main-header');
const page = document.querySelector('.page-content');
let prevScrollpos = window.pageYOffset;

mainHeader.classList.remove('main-header--no-js');

const addAnimation = () => {
  nav.classList.remove('main-nav--no-js');
  return new Promise((resolve) => {
    setTimeout(() => {
      nav.classList.add('main-nav--transition');
      resolve();
    }, 0);
  });
};

addAnimation();

const closeMenu = () => {
  menuButton.classList.remove('main-header__menu-button--active');
  nav.classList.remove('main-nav--active');
  page.removeEventListener('click', onClickAway);
  window.removeEventListener('scroll', onScrollDown);
};

const openMenu = () => {
  menuButton.classList.add('main-header__menu-button--active');
  nav.classList.add('main-nav--active');
  page.addEventListener('click', onClickAway);
  window.addEventListener('scroll', onScrollDown);
};

function onClickAway () {
  closeMenu();
}

const toggleMenu = () =>{
  if (menuButton.classList.contains('main-header__menu-button--active')) {
    closeMenu();
  } else {
    openMenu();
  }
};

menuButton.addEventListener('click', () => {
  toggleMenu();
});

function onScrollDown () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    closeMenu();
  }
  prevScrollpos = currentScrollPos;
}

