import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

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

export default initGallerySwiper;