import initHeader from './header.js';
import initTitleData from './title-data.js';
import initHeroSwiper from './hero-swiper.js';
import initToursSwiper from './tours-swiper.js';
import initTrainersSwiper from './trainers-swiper.js';
import initReviewsSwiper from './reviews-swiper.js';
import initFeaturesSwiper from './features-swiper.js';
import initGallerySwiper from './gallery-swiper.js';
import addTitleClass from './about.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initTitleData();
  initHeroSwiper();
  initToursSwiper();
  initTrainersSwiper();
  initReviewsSwiper();
  addTitleClass();
  initGallerySwiper();
  initFeaturesSwiper();
});
