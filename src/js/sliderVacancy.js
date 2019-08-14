let leftButton = document.querySelector('.slider-button-left-vacancy');
let rightButton = document.querySelector('.slider-button-right-vacancy');

let slides = document.querySelectorAll('.numbers-saying-image');
let slidesDots = document.querySelectorAll('.numbers-saying-slider-dot');

let currentSlide = 0;

function goToSlide(n) {
  slides[currentSlide].style.opacity = '0';
  slidesDots[currentSlide].style.backgroundColor = '#e4e4ea';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.opacity = '1';
  slidesDots[currentSlide].style.backgroundColor = '#0a083a';
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

leftButton.addEventListener('click', previousSlide);
rightButton.addEventListener('click', nextSlide);
