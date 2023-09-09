import { Swiper, Navigation } from 'swiper'
Swiper.use([Navigation])

window.addEventListener(
  'load',
  () => {
    const meetsEducationSlider = new Swiper(`.s-meets-education__slider`, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.s-meets-education__button-next',
        prevEl: '.s-meets-education__button-prev',
      },
      resistance: true,
      resistanceRatio: 1,
      spaceBetween: 16,
      autoHeight: false,
      grabCursor: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
    })
  },
  false,
)
