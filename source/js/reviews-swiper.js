import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const reviewsSwiper = new Swiper('.reviews-swiper', {
  modules: [ Navigation],
  init: false,
  loop: false,
  breakpoints: {
    320: {
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 15,
      slidesOffsetAfter: 120,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 90,
      slidesOffsetAfter: 500,
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