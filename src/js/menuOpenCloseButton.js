const menuButton = document.querySelector('.menu');
const menu = document.querySelector('.dropdown-menu');
const closeButton = document.querySelector('.cross-mark');

menuButton.addEventListener('click', () => {
  menu.style.display = 'block';
  menu.style.position = 'fixed';
  menu.style.zIndex = '9999';
});

closeButton.addEventListener('click', () => {
  menu.style.display = 'none';
});
