import { Swiper, Navigation } from 'swiper'
Swiper.use([Navigation])

window.addEventListener(
  'load',
  () => {
    const teamItemsSlider = new Swiper(`.s-team-list__slider`, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.s-team-list__button-next',
        prevEl: '.s-team-list__button-prev',
      },
      resistance: true,
      resistanceRatio: 1,
      spaceBetween: 16,
      autoHeight: false,
      grabCursor: true,
    })
  },
  false,
)
