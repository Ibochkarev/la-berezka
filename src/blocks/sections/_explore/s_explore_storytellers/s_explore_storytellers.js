import { Swiper, Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

window.addEventListener(
  'load',
  () => {
    const exploreStorytellersSlider = new Swiper(`.s-explore-storytellers__slider`, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.s-explore-storytellers__button-next',
        prevEl: '.s-explore-storytellers__button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>'
        },
      },
      resistance: true,
      resistanceRatio: 1,
      spaceBetween: 28,
      grabCursor: true,
      autoHeight: true,
      breakpoints: {
        992: {
          spaceBetween: 28,
        },
        1024: {
          spaceBetween: 0,
        },
        1336: {
          spaceBetween: 136,
        },
      },
    })
  },
  false,
)
