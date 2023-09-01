//Menu

let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-navigation__toggle');

navMain.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});

//Range-slider
function initCatSlider() {
  const container = document.querySelector('.benefits-example__image-container');
  document.querySelector('.benefits-example__range-slider')?.addEventListener('input', (e) => {
    container.style.setProperty('--persent', `${e.target.value}%`);
    document.querySelector('output').innerHTML = `${e.target.value}%`;
  });
}

initCatSlider();
