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
  }
});

const initTrainersSwiper = () => {
  trainersSwiper.init();
};

export default initTrainersSwiper;
