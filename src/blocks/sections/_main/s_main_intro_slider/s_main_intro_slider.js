import { Swiper, Autoplay } from 'swiper'
Swiper.use([Autoplay])

window.addEventListener(
  'load',
  () => {
    const introSlider = new Swiper(`.s-main-intro-slider`, {
      loop: true,
      slidesPerView: 1,
      resistance: true,
      resistanceRatio: 1,
      grabCursor: true,
      autoplay: {
        delay: 5000,
      },
    })
  },
  false,
)
