import { Swiper, Navigation } from 'swiper'
Swiper.use([Navigation])

window.addEventListener(
  'load',
  () => {
    const exploreStorytellersSlider = new Swiper(`.s-explore-storytellers__slider`, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.s-explore-storytellers__button-next',
        prevEl: '.s-explore-storytellers__button-prev',
      },
      resistance: true,
      resistanceRatio: 1,
      spaceBetween: 28,
      grabCursor: true,
      autoHeight: true,
      breakpoints: {
        992: {
          slidesPerView: 1,
          spaceBetween: 28,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1336: {
          slidesPerView: 1,
          spaceBetween: 136,
        },
      },
    })
  },
  false,
)
