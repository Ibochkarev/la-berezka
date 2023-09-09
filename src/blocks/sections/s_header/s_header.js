import { Swiper, Pagination, Navigation } from 'swiper'

Swiper.use([Pagination, Navigation])

let header = document.querySelector('.s-header'),
  headerBurger = document.querySelector('.s-header__burger'),
  // headerSearchButton = document.querySelector('.s-header__actions-search'),
  mobileModalMenuClose = document.querySelector('.m-modal-menu__close'),
  mobileModalSearchClose = document.querySelector('.m-modal-search__close'),
  headerNavigation = document.querySelector('.m-modal-menu'),
  mobileModalSearch = document.querySelector('.m-modal-search'),
  backdrop = document.querySelector('.backdrop'),
  breakpointScroll = document.getElementsByClassName('s-header')['0'].offsetHeight,
  bodyBlock = document.querySelector('body')

document.addEventListener('DOMContentLoaded', function () {
  // Открытие/Закрытие мега меню по клику на бургер
  headerBurger.addEventListener('click', () => {
    headerNavigation.classList.toggle('is-show')
    bodyBlock.classList.toggle('is-blocked')
  })

  mobileModalMenuClose.addEventListener('click', () => {
    headerNavigation.classList.toggle('is-show')
    bodyBlock.classList.toggle('is-blocked')
  })

  // Открытие/Закрытие модалки поиска по клику на кнопку поиска
  // headerSearchButton.addEventListener('click', () => {
  //   mobileModalSearch.classList.toggle('is-show')
  //   backdrop.classList.toggle('is-active')
  //   bodyBlock.classList.toggle('is-blocked')
  // })

  mobileModalSearchClose.addEventListener('click', () => {
    mobileModalSearch.classList.toggle('is-show')
    backdrop.classList.toggle('is-active')
    bodyBlock.classList.toggle('is-blocked')
  })

  // Закрытие модалки поиска по клику вне меню
  backdrop.addEventListener('click', () => {
    mobileModalSearch.classList.remove('is-show')
    backdrop.classList.remove('is-active')
    bodyBlock.classList.remove('is-blocked')
  })

  // Фиксация шапки при скроле
  document.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset

    if (scrollTop > breakpointScroll) {
      header.classList.add('is-fixed')
    } else {
      header.classList.remove('is-fixed')
    }
  })
})
