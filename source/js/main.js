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
