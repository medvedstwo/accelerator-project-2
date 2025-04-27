// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

import initHeader from './header.js';
import initTitleData from './title-data.js';
import initHeroSwiper from './hero-swiper.js';
import initToursSwiper from './tours-swiper.js';
import initTrainersSwiper from './trainers-swiper.js';
import initReviewsSwiper from './reviews-swiper.js';
import initFeaturesSwiper from './features-swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initTitleData();
  initHeroSwiper();
  initToursSwiper();
  initTrainersSwiper();
  initReviewsSwiper();
});

// const gallerySwiper = new Swiper('.gallery-swiper', {
//   modules: [ Navigation],
//   loop: true,
//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 4,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 5,
//     }
//   },
// });

const initGallerySwiper = (breakpoint, swiperClass, swiperSettings) => {
  let swiper;

  breakpoint = window.matchMedia(breakpoint);

  const enableSwiper = function(className, settings) {
    swiper = new Swiper(className, settings);
  };

  const checker = function() {
    if (breakpoint.matches) {
      return enableSwiper(swiperClass, swiperSettings);
    } else {
      if (swiper !== undefined) {
        swiper.destroy(true, true);
      }
    }
  };

  breakpoint.addEventListener('change', checker);
  checker();
};

initGallerySwiper(
  '(max-width: 1339px)',
  '.gallery-swiper',
  {
    modules: [ Navigation],
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 4,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      }
    },
  }
);