import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const reviewsSwiper = new Swiper('.reviews-swiper', {
  modules: [ Navigation],
  init: false,
  loop: false,
  autoHeight: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
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
    nextEl: '.button__swiper-nav--next',
    prevEl: '.button__swiper-nav--prev',
    disabledClass: 'button__swiper-nav--disabled',
  }
});

const initReviewsSwiper = () => {
  reviewsSwiper.init();
};

export default initReviewsSwiper;