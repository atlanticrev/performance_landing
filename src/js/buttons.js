import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

// Scroll function
function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.getBoundingClientRect().top + window.scrollY
  });
}

// Buttons
const buttonParticipate = document.querySelector('.button-participate');
const buttonSignUp = document.querySelector('.sign-up-button');
const buttonWantCertificate = document.querySelector('.want-certificate-button');
const upButton = document.querySelector('.button-with-arrow');
const decorativeHeaderButton = document.querySelector('.header-button-down');
const decorativeFooterButton = document.querySelector('.footer-button-up');
const signUpButtonDesktop = document.querySelector('.sign-up-button-desktop');

// Sections
const form = document.querySelector('.start-right-now');
const headerSection = document.querySelector('.header-section');

// Event listeners
buttonParticipate.addEventListener('click', () => {
  scrollTo(form);
  document.querySelector('.dropdown-menu').style.display = 'none';
});

buttonSignUp.addEventListener('click', () => {
  scrollTo(form);
  document.querySelector('.dropdown-menu').style.display = 'none';
});

buttonWantCertificate.addEventListener('click', () => {
  scrollTo(form);
  document.querySelector('.dropdown-menu').style.display = 'none';
});

upButton.addEventListener('click', () => {
  scrollTo(headerSection);
});

decorativeFooterButton.addEventListener('click', () => {
  scrollTo(headerSection);
});

decorativeHeaderButton.addEventListener('click', () => {
  scrollTo(form);
});

signUpButtonDesktop.addEventListener('click', () => {
  scrollTo(form);
});
