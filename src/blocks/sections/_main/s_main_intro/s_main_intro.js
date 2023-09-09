import { Swiper, EffectFade, Autoplay } from 'swiper'
Swiper.use([EffectFade, Autoplay])

window.addEventListener(
  'load',
  () => {
    const introSlider = new Swiper(`.s-main-intro__slider`, {
      loop: true,
      slidesPerView: 1,
      effect: 'fade',
      resistance: true,
      resistanceRatio: 1,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    })
  },
  false,
)
