const menuButton = document.querySelector('.main-header__menu-button');
const nav = document.querySelector('.main-nav');
const mainHeader = document.querySelector('.main-header');
const page = document.querySelector('.page-content');

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
};

const openMenu = () => {
  menuButton.classList.add('main-header__menu-button--active');
  nav.classList.add('main-nav--active');
  page.addEventListener('click', onClickAway);
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

//# sourceMappingURL=menu.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fbWVudS1idXR0b24nKTtcclxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2Jyk7XHJcbmNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXInKTtcclxuY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWNvbnRlbnQnKTtcclxuXHJcbm1haW5IZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXItLW5vLWpzJyk7XHJcblxyXG5jb25zdCBhZGRBbmltYXRpb24gPSAoKSA9PiB7XHJcbiAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbmF2LS1uby1qcycpO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdi0tdHJhbnNpdGlvbicpO1xyXG4gICAgICByZXNvbHZlKCk7XHJcbiAgICB9LCAwKTtcclxuICB9KTtcclxufTtcclxuXHJcbmFkZEFuaW1hdGlvbigpO1xyXG5cclxuY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX21lbnUtYnV0dG9uLS1hY3RpdmUnKTtcclxuICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1uYXYtLWFjdGl2ZScpO1xyXG4gIHBhZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrQXdheSk7XHJcbn07XHJcblxyXG5jb25zdCBvcGVuTWVudSA9ICgpID0+IHtcclxuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19tZW51LWJ1dHRvbi0tYWN0aXZlJyk7XHJcbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2LS1hY3RpdmUnKTtcclxuICBwYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0F3YXkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gb25DbGlja0F3YXkgKCkge1xyXG4gIGNsb3NlTWVudSgpO1xyXG59XHJcblxyXG5jb25zdCB0b2dnbGVNZW51ID0gKCkgPT57XHJcbiAgaWYgKG1lbnVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fbWVudS1idXR0b24tLWFjdGl2ZScpKSB7XHJcbiAgICBjbG9zZU1lbnUoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgb3Blbk1lbnUoKTtcclxuICB9XHJcbn07XHJcblxyXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHRvZ2dsZU1lbnUoKTtcclxufSk7XHJcbiJdLCJmaWxlIjoibWVudS5qcyJ9
