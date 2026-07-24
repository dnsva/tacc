// Mobile navigation menu toggle
const menu = document.querySelector('.navbar-mobile');

document.querySelector('.navbar-burger').addEventListener('click', () => {
  menu.classList.add('is-open');
});

document.querySelector('.navbar-close').addEventListener('click', () => {
  menu.classList.remove('is-open');
});
