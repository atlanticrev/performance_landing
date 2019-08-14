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
const buttonForWho = document.querySelector('.desktop-for-who');
const buttonYouWillLearn = document.querySelector('.desktop-you-will-learn');
const buttonComment = document.querySelector('.desktop-comment');
const buttonYourDiploma = document.querySelector('.desktop-your-diploma');
const buttonYourInternship = document.querySelector('.desktop-your-internship');
const buttonOffers = document.querySelector('.desktop-offers');

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
});
//
buttonYouWillLearn.addEventListener('click', () => {
  scrollTo(section30Lessons);
});

buttonComment.addEventListener('click', () => {
  scrollTo(sectionFeedback);
});

buttonYourDiploma.addEventListener('click', () => {
  scrollTo(sectionDiploma);
});

buttonYourInternship.addEventListener('click', () => {
  scrollTo(sectionInternship);
});

buttonOffers.addEventListener('click', () => {
  scrollTo(sectionVacancy);
});
