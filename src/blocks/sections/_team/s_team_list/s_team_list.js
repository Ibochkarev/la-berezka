import { Swiper, Navigation } from 'swiper'
Swiper.use([Navigation])

window.addEventListener(
  'load',
  () => {
    const teamItemsSlider = new Swiper(`.s-team-list__slider`, {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.s-team-list__button-next',
        prevEl: '.s-team-list__button-prev',
      },
      resistance: true,
      resistanceRatio: 1,
      spaceBetween: 28,
      grabCursor: true,
      direction: 'vertical',
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 16,
          direction: 'horizontal',
          autoHeight: true,
        },
      },
    })
  },
  false,
)
