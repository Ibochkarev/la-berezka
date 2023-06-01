import { Swiper, Navigation } from 'swiper'
Swiper.use([Navigation])

window.addEventListener(
  'load',
  () => {
    const articlesSlider = new Swiper(`.s-blog-articles__slider`, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.s-blog-articles__button-next',
        prevEl: '.s-blog-articles__button-prev',
      },
      resistance: true,
      resistanceRatio: 1,
      spaceBetween: 16,
      autoHeight: true,
      grabCursor: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    })
  },
  false,
)
