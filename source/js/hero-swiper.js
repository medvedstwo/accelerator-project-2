
import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';


const heroSwiper = new Swiper('.hero-swiper', {
  modules: [ Pagination],
  init: false,
  loop: true,
  // initialSlide: 1,
  pagination: {
    el: '.hero-swiper__pagination',
    bulletElement: 'button',
    bulletClass: 'button hero-swiper__bullet',
    bulletActiveClass: 'hero-swiper__bullet--active',
  },
  breakpoints: {
    1440: {
      pagination: {
        clickable: true,
      }
    }
  }
});

const initHeroSwiper = () => {
  heroSwiper.init();
};

export default initHeroSwiper;
