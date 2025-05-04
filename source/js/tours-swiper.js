import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const toursSwiper = new Swiper('.tours-swiper', {
  modules: [ Navigation],
  init: false,
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
  navigation: {
    nextEl: '.tours__button-next',
    prevEl: '.tours__button-prev',
    disabledClass: 'button-swiper--disabled',
  }
});

const initToursSwiper = () => {
  toursSwiper.init();
};

export default initToursSwiper;
