import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

// // Scroll function
function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.getBoundingClientRect().top + window.scrollY
  });
}

// Buttons
const buttonForWho = document.querySelector('.for-who');
const buttonYouWillLearn = document.querySelector('.you-will-learn');
const buttonComment = document.querySelector('.comment');
const buttonYourDiploma = document.querySelector('.your-diploma');
const buttonYourInternship = document.querySelector('.your-internship');
const buttonOffers = document.querySelector('.offers');

// Sections
const sectionForYou = document.querySelector('.this-course-for-you');
const section30Lessons = document.querySelector('.for-thirty-lessons');
const sectionFeedback = document.querySelector('.feedback');
const sectionDiploma = document.querySelector('.diploma');
const sectionInternship = document.querySelector('.internship');
const sectionVacancy = document.querySelector('.numbers-saying');

// Event listeners
buttonForWho.addEventListener('click', () => {
  scrollTo(sectionForYou);
  document.querySelector('.dropdown-menu').style.display = 'none';
});
//
buttonYouWillLearn.addEventListener('click', () => {
  scrollTo(section30Lessons);
  document.querySelector('.dropdown-menu').style.display = 'none';
});

buttonComment.addEventListener('click', () => {
  scrollTo(sectionFeedback);
  document.querySelector('.dropdown-menu').style.display = 'none';
});

buttonYourDiploma.addEventListener('click', () => {
  scrollTo(sectionDiploma);
  document.querySelector('.dropdown-menu').style.display = 'none';
});

buttonYourInternship.addEventListener('click', () => {
  scrollTo(sectionInternship);
  document.querySelector('.dropdown-menu').style.display = 'none';
});

buttonOffers.addEventListener('click', () => {
  scrollTo(sectionVacancy);
  document.querySelector('.dropdown-menu').style.display = 'none';
});
