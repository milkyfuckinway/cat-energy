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


//# sourceMappingURL=menu.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fbWVudS1idXR0b24nKTtcclxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2Jyk7XHJcbmNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXInKTtcclxuY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWNvbnRlbnQnKTtcclxubGV0IHByZXZTY3JvbGxwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5tYWluSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyLS1uby1qcycpO1xyXG5cclxuY29uc3QgYWRkQW5pbWF0aW9uID0gKCkgPT4ge1xyXG4gIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW5hdi0tbm8tanMnKTtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1uYXYtLXRyYW5zaXRpb24nKTtcclxuICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgfSwgMCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5hZGRBbmltYXRpb24oKTtcclxuXHJcbmNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHtcclxuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19tZW51LWJ1dHRvbi0tYWN0aXZlJyk7XHJcbiAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbmF2LS1hY3RpdmUnKTtcclxuICBwYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0F3YXkpO1xyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbERvd24pO1xyXG59O1xyXG5cclxuY29uc3Qgb3Blbk1lbnUgPSAoKSA9PiB7XHJcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbWVudS1idXR0b24tLWFjdGl2ZScpO1xyXG4gIG5hdi5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdi0tYWN0aXZlJyk7XHJcbiAgcGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tBd2F5KTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGxEb3duKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uQ2xpY2tBd2F5ICgpIHtcclxuICBjbG9zZU1lbnUoKTtcclxufVxyXG5cclxuY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+e1xyXG4gIGlmIChtZW51QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1oZWFkZXJfX21lbnUtYnV0dG9uLS1hY3RpdmUnKSkge1xyXG4gICAgY2xvc2VNZW51KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9wZW5NZW51KCk7XHJcbiAgfVxyXG59O1xyXG5cclxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICB0b2dnbGVNZW51KCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gb25TY3JvbGxEb3duICgpIHtcclxuICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gIGlmIChwcmV2U2Nyb2xscG9zIDwgY3VycmVudFNjcm9sbFBvcykge1xyXG4gICAgY2xvc2VNZW51KCk7XHJcbiAgfVxyXG4gIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zO1xyXG59XHJcblxyXG4iXSwiZmlsZSI6Im1lbnUuanMifQ==
