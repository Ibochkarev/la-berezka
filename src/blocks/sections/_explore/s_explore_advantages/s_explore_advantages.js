import { Swiper, Navigation } from 'swiper'
Swiper.use([Navigation])

window.addEventListener(
  'load',
  () => {
    const exploreAdvantagesSlider = new Swiper(`.s-explore-advantages__slider`, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.s-explore-advantages__button-next',
        prevEl: '.s-explore-advantages__button-prev',
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
