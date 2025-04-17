import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const toursSwiper = new Swiper('.tours-swiper', {
  modules: [ Navigation],
  init: false,
  loop: false,
});

const initToursSwiper = () => {
  toursSwiper.init();
};

export default initToursSwiper;