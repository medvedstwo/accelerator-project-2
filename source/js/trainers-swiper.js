import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const trainersSwiper = new Swiper('.trainers-swiper', {
  modules: [ Navigation],
  init: false,
  loop: false,
  initialSlide: 2,
  navigation: {
    nextEl: '.button__swiper-nav--next',
    prevEl: '.button__swiper-nav--prev',
    disabledClass: 'button__swiper-nav--disabled',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      initialSlide: 0,
      spaceBetween: 20,
    }
  }
});

const initTrainersSwiper = () => {
  trainersSwiper.init();
};

export default initTrainersSwiper;
