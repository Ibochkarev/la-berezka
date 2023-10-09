import { Swiper, Navigation, Thumbs } from 'swiper'
Swiper.use([Navigation, Thumbs])

window.addEventListener(
  'load',
  () => {
    const ourTeamItemsSlider = new Swiper(`.s-our-team__slider`, {
      slidesPerView: 1,
      resistance: true,
      resistanceRatio: 1,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      },
    })
    const ourTeamItemsSliderBottom = new Swiper(`.s-our-team__bottom`, {
      slidesPerView: 1,
      resistance: true,
      resistanceRatio: 1,
      navigation: {
        nextEl: '.s-our-team__button-next',
        prevEl: '.s-our-team__button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      },
      thumbs: {
        swiper: ourTeamItemsSlider,
      },
    })
  },
  false,
)
