const titleElement = document.querySelectorAll('.title');

const initTitleData = () => {
  titleElement.forEach((el) => {
    const titleData = el.textContent;
    el.dataset.title = titleData;
  });
};

export default initTitleData;
