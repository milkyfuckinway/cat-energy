const menuButton = document.querySelector('.main-header__menu-button');
const nav = document.querySelector('.main-nav');
const mainHeader = document.querySelector('.main-header');

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

menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('main-header__menu-button--active')) {
    menuButton.classList.remove('main-header__menu-button--active');
    nav.classList.remove('main-nav--active');
  } else {
    menuButton.classList.add('main-header__menu-button--active');
    nav.classList.add('main-nav--active');
  }
});
