const aboutContentElement = document.querySelector('.about__content');
const aboutTitleElement = aboutContentElement.querySelector('h2');

const addTitleClass = () => {
  aboutTitleElement.classList.add('title');
};

export default addTitleClass;

