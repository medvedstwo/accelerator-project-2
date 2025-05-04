import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const trainersSwiper = new Swiper('.trainers-swiper', {
  modules: [ Navigation],
  init: false,
  loop: false,
  initialSlide: 2,
  navigation: {
    nextEl: '.trainers__button-next',
    prevEl: '.trainers__button-prev',
    disabledClass: 'button-swiper--disabled',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      initialSlide: 0,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      initialSlide: 0,
      spaceBetween: 20,
    }
  }
});

const initTrainersSwiper = () => {
  trainersSwiper.init();
};

export default initTrainersSwiper;
