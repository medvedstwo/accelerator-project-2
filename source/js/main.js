// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import initHeader from './header.js';
import initTitleData from './title-data.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initTitleData();
});


import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.hero-swiper', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.hero-swiper__pagination',
    bulletClass: 'hero-swiper__bullet',
    bulletActiveClass: 'hero-swiper__bullet--active',
  },
  autoHeight: true,
});
