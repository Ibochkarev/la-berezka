import { Swiper, Navigation } from 'swiper'
Swiper.use([Navigation])

window.addEventListener(
  'load',
  () => {
    const articlesCategorySlider = new Swiper(`.s-articles-category__slider`, {
      navigation: {
        nextEl: '.s-articles-category__button-next',
        prevEl: '.s-articles-category__button-prev',
      },
      resistance: true,
      resistanceRatio: 1,
      autoHeight: true,
      grabCursor: true,
      breakpoints: {
        0: {
          slidesPerView: 'auto',
          spaceBetween: 28,
        },
        768: {
          spaceBetween: 33,
        },
      },
    })
  },
  false,
)
