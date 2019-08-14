let leftButton = document.querySelector('.slider-button-left');
let rightButton = document.querySelector('.slider-button-right');

let slides = document.querySelectorAll('.feedback-slide');
let slidesDots = document.querySelectorAll('.slider-dot-feedback');
let slidesText = document.querySelectorAll('.feedback-text');

let currentSlide = 0;

function goToSlide(n) {
  slides[currentSlide].style.opacity = '0';
  slidesDots[currentSlide].style.backgroundColor = '#e4e4ea';
  slidesText[currentSlide].style.opacity = '0';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.opacity = '1';
  slidesDots[currentSlide].style.backgroundColor = '#0a083a';
  slidesText[currentSlide].style.opacity = '1';
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

leftButton.addEventListener('click', previousSlide);
rightButton.addEventListener('click', nextSlide);
