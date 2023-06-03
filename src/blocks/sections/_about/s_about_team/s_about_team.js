import { Swiper, Navigation } from 'swiper'
Swiper.use([Navigation])

window.addEventListener(
  'load',
  () => {
    const teamSlider = new Swiper(`.s-about-team__slider`, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.s-about-team__button-next',
        prevEl: '.s-about-team__button-prev',
      },
      resistance: true,
      resistanceRatio: 1,
      spaceBetween: 16,
      // autoHeight: true,
      grabCursor: true,
      breakpoints: {
        500: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        830: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    })
  },
  false,
)
