const titleElement = document.querySelectorAll('h2');

const initTitleData = () => {
  titleElement.forEach((el) => {
    const titleData = el.textContent;
    el.dataset.title = titleData;
  });
};

export default initTitleData;
