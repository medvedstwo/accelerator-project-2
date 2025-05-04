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
      slidesOffsetAfter: 0,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      slidesOffsetAfter: 120,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 120,
      slidesOffsetAfter: 500,
    }
  },
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
    disabledClass: 'button-swiper--disabled',
  }
});

const initReviewsSwiper = () => {
  reviewsSwiper.init();
};

export default initReviewsSwiper;
