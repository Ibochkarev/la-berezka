import { Swiper, Navigation } from 'swiper'
Swiper.use([Navigation])

window.addEventListener(
  'load',
  () => {
    const articlesCategorySlider = new Swiper(`.s-articles-category__slider`, {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.s-articles-category__button-next',
        prevEl: '.s-articles-category__button-prev',
      },
      resistance: true,
      resistanceRatio: 1,
      spaceBetween: 30,
      autoHeight: true,
      grabCursor: true,
      breakpoints: {
        768: {
          spaceBetween: 20,
        },
      },
    })
  },
  false,
)
