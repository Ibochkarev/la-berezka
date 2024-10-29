import { Swiper, Navigation } from 'swiper'
Swiper.use([Navigation])

window.addEventListener(
  'load',
  () => {
    const meetsEducationSlider = new Swiper(`.admission-process__slider`, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.admission-process__button-next',
        prevEl: '.admission-process__button-prev',
      },
      resistance: true,
      resistanceRatio: 1,
      spaceBetween: 16,
      autoHeight: false,
      grabCursor: true,
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 45,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    })
  },
  false,
)
