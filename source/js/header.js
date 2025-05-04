const body = document.querySelector('.page-body');
const header = document.querySelector('.header');
const burgerButton = header.querySelector('.nav__button');
const navList = header.querySelector('.nav__list');

const closeHeader = () => {
  body.classList.remove('page-body--overflow-hidden');
  burgerButton.classList.remove('nav__button--active');
};

const openHeader = (evt) => {
  if (evt.target.classList.contains('nav__link')) {
    closeHeader();
  }
};

const navHandler = () => {
  burgerButton.classList.toggle('nav__button--active');
  body.classList.toggle('page-body--overflow-hidden');
};

burgerButton.addEventListener('click', navHandler);
burgerButton.addEventListener('click', openHeader);
navList.addEventListener('click', openHeader);
navList.removeEventListener('click', closeHeader);

const initHeader = () => {
  navHandler();
  burgerButton.classList.remove('nav__button--active');
  body.classList.remove('page-body--overflow-hidden');
};

export default initHeader;
