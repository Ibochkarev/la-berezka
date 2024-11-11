import { Swiper, Navigation, Thumbs } from 'swiper'
Swiper.use([Navigation, Thumbs])

if (document.querySelector('.s-our-team__slider')) {
  window.addEventListener(
    'load',
    () => {
      const ourTeamItemsSlider = new Swiper('.s-our-team__slider', {
        slidesPerView: 1,
        resistance: true,
        resistanceRatio: 1,
        spaceBetween: 0,
        autoHeight: true,
        loop: true,
      })

      const ourTeamItemsSliderBottom = new Swiper('.s-our-team__bottom', {
        slidesPerView: 1,
        resistance: true,
        resistanceRatio: 1,
        spaceBetween: 0,
        loop: true,
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

      // Используем метод on для инициализации контроллера
      ourTeamItemsSlider.on('init', () => {
        if (ourTeamItemsSlider.controller && ourTeamItemsSliderBottom.controller) {
          ourTeamItemsSlider.controller.control = ourTeamItemsSliderBottom
          ourTeamItemsSliderBottom.controller.control = ourTeamItemsSlider
        } else {
          console.error('Swiper controller property is not available')
        }
      })

      ourTeamItemsSliderBottom.on('init', () => {
        if (ourTeamItemsSlider.controller && ourTeamItemsSliderBottom.controller) {
          ourTeamItemsSlider.controller.control = ourTeamItemsSliderBottom
          ourTeamItemsSliderBottom.controller.control = ourTeamItemsSlider
        } else {
          console.error('Swiper controller property is not available')
        }
      })
    },
    false,
  )
}
