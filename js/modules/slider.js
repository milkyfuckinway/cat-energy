const slider = document.querySelector('.slider');
const sliderToggler = document.querySelector('.slider__toggler');
const sliderBefore = document.querySelector('.slider__before');
const sliderAfter = document.querySelector('.slider__after');

const addResizeListener = () => {
  window.addEventListener('resize', onResize);
};

const removeResizeListener = () => {
  window.removeEventListener('resize', onResize);
};

const addMoveListener = () => {
  document.addEventListener('mousemove', onMove);
};

const removeMoveListener = () => {
  document.removeEventListener('mousemove', onMove);
};

sliderToggler.addEventListener('mousedown', addMoveListener);

function onMove(evt) {
  evt.preventDefault();
  document.addEventListener('mouseup', removeMoveListener);
  addResizeListener();
  const sliderWidth = slider.offsetWidth;
  const positionInSlider = evt.clientX - slider.offsetLeft;
  if (positionInSlider >= 0 && positionInSlider <= sliderWidth) {
    sliderBefore.style.clipPath = `inset(0 ${
      sliderWidth - positionInSlider
    }px 0 0)`;
    sliderAfter.style.clipPath = `inset(0 0 0 ${positionInSlider}px)`;
    sliderToggler.style.left = `${positionInSlider}px`;
  }
  if (positionInSlider < 0) {
    sliderToggler.style.left = '0px';
    sliderBefore.style.clipPath = `inset(0 ${sliderWidth}px 0 0)`;
    sliderAfter.style.clipPath = 'inset(0 0 0 0px)';
  }
  if (positionInSlider > sliderWidth) {
    sliderToggler.style.left = `${sliderWidth}px`;
    sliderBefore.style.clipPath = 'inset(0 0px 0 0)';
    sliderAfter.style.clipPath = `inset(0 0 0 ${sliderWidth}px)`;
  }
}

function onResize() {
  sliderBefore.style.clipPath = 'inset(0 50% 0 0)';
  sliderAfter.style.clipPath = 'inset(0 0 0 50%)';
  sliderToggler.style.left = '50%';
  removeResizeListener();
}

//# sourceMappingURL=slider.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL3NsaWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyJyk7XHJcbmNvbnN0IHNsaWRlclRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX190b2dnbGVyJyk7XHJcbmNvbnN0IHNsaWRlckJlZm9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2JlZm9yZScpO1xyXG5jb25zdCBzbGlkZXJBZnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2FmdGVyJyk7XHJcblxyXG5jb25zdCBhZGRSZXNpemVMaXN0ZW5lciA9ICgpID0+IHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlUmVzaXplTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZE1vdmVMaXN0ZW5lciA9ICgpID0+IHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdmUpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlTW92ZUxpc3RlbmVyID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW92ZSk7XHJcbn07XHJcblxyXG5zbGlkZXJUb2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGFkZE1vdmVMaXN0ZW5lcik7XHJcblxyXG5mdW5jdGlvbiBvbk1vdmUoZXZ0KSB7XHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHJlbW92ZU1vdmVMaXN0ZW5lcik7XHJcbiAgYWRkUmVzaXplTGlzdGVuZXIoKTtcclxuICBjb25zdCBzbGlkZXJXaWR0aCA9IHNsaWRlci5vZmZzZXRXaWR0aDtcclxuICBjb25zdCBwb3NpdGlvbkluU2xpZGVyID0gZXZ0LmNsaWVudFggLSBzbGlkZXIub2Zmc2V0TGVmdDtcclxuICBpZiAocG9zaXRpb25JblNsaWRlciA+PSAwICYmIHBvc2l0aW9uSW5TbGlkZXIgPD0gc2xpZGVyV2lkdGgpIHtcclxuICAgIHNsaWRlckJlZm9yZS5zdHlsZS5jbGlwUGF0aCA9IGBpbnNldCgwICR7XHJcbiAgICAgIHNsaWRlcldpZHRoIC0gcG9zaXRpb25JblNsaWRlclxyXG4gICAgfXB4IDAgMClgO1xyXG4gICAgc2xpZGVyQWZ0ZXIuc3R5bGUuY2xpcFBhdGggPSBgaW5zZXQoMCAwIDAgJHtwb3NpdGlvbkluU2xpZGVyfXB4KWA7XHJcbiAgICBzbGlkZXJUb2dnbGVyLnN0eWxlLmxlZnQgPSBgJHtwb3NpdGlvbkluU2xpZGVyfXB4YDtcclxuICB9XHJcbiAgaWYgKHBvc2l0aW9uSW5TbGlkZXIgPCAwKSB7XHJcbiAgICBzbGlkZXJUb2dnbGVyLnN0eWxlLmxlZnQgPSAnMHB4JztcclxuICAgIHNsaWRlckJlZm9yZS5zdHlsZS5jbGlwUGF0aCA9IGBpbnNldCgwICR7c2xpZGVyV2lkdGh9cHggMCAwKWA7XHJcbiAgICBzbGlkZXJBZnRlci5zdHlsZS5jbGlwUGF0aCA9ICdpbnNldCgwIDAgMCAwcHgpJztcclxuICB9XHJcbiAgaWYgKHBvc2l0aW9uSW5TbGlkZXIgPiBzbGlkZXJXaWR0aCkge1xyXG4gICAgc2xpZGVyVG9nZ2xlci5zdHlsZS5sZWZ0ID0gYCR7c2xpZGVyV2lkdGh9cHhgO1xyXG4gICAgc2xpZGVyQmVmb3JlLnN0eWxlLmNsaXBQYXRoID0gJ2luc2V0KDAgMHB4IDAgMCknO1xyXG4gICAgc2xpZGVyQWZ0ZXIuc3R5bGUuY2xpcFBhdGggPSBgaW5zZXQoMCAwIDAgJHtzbGlkZXJXaWR0aH1weClgO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25SZXNpemUoKSB7XHJcbiAgc2xpZGVyQmVmb3JlLnN0eWxlLmNsaXBQYXRoID0gJ2luc2V0KDAgNTAlIDAgMCknO1xyXG4gIHNsaWRlckFmdGVyLnN0eWxlLmNsaXBQYXRoID0gJ2luc2V0KDAgMCAwIDUwJSknO1xyXG4gIHNsaWRlclRvZ2dsZXIuc3R5bGUubGVmdCA9ICc1MCUnO1xyXG4gIHJlbW92ZVJlc2l6ZUxpc3RlbmVyKCk7XHJcbn1cclxuIl0sImZpbGUiOiJzbGlkZXIuanMifQ==
