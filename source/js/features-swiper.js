import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const initFeaturesSwiper = (breakpoint, swiperClass, swiperSettings) => {
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

initFeaturesSwiper(
  '(min-width: 1440px)',
  '.features-swiper',
  {
    loop: true,
    slidesPerView: 'auto',
  }
);

export default initFeaturesSwiper;