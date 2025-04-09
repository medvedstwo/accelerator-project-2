const body = document.querySelector('.page-body');
const header = document.querySelector('.header');
const burgerButton = header.querySelector('.nav__button');

const navHandler = () => {
  burgerButton.classList.toggle('nav__button--active');
  body.classList.toggle('page-body--overflow-hidden');
};

burgerButton.addEventListener('click', navHandler);

const initHeader = () => {
  navHandler();
  burgerButton.classList.remove('nav__button--active');
  body.classList.remove('page-body--overflow-hidden');
};

export default initHeader;
