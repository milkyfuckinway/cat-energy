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
