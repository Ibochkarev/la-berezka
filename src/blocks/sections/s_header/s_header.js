import { Swiper, Pagination, Navigation } from 'swiper'

Swiper.use([Pagination, Navigation])

let header = document.querySelector('.s-header'),
  headerBurger = document.querySelector('.s-header__burger'),
  mobileModalClose = document.querySelector('.m-modal-menu__close'),
  headerNavigation = document.querySelector('.m-modal-menu'),
  // backdrop = document.querySelector('.backdrop'),
  breakpointScroll = document.getElementsByClassName('s-header')['0'].offsetHeight,
  bodyBlock = document.querySelector('body')

document.addEventListener('DOMContentLoaded', function () {
  // Открытие/Закрытие мега меню по клику на бургер
  headerBurger.addEventListener('click', () => {
    // headerBurger.classList.toggle('is-open')
    headerNavigation.classList.toggle('is-show')
    // backdrop.classList.toggle('is-active')
    bodyBlock.classList.toggle('is-blocked')
  })

  mobileModalClose.addEventListener('click', () => {
    // headerBurger.classList.toggle('is-open')
    headerNavigation.classList.toggle('is-show')
    // backdrop.classList.toggle('is-active')
    bodyBlock.classList.toggle('is-blocked')
  })

  // Закрытие меню по клику вне меню
  // backdrop.addEventListener('click', () => {
  //   headerBurger.classList.remove('is-open')
  //   backdrop.classList.remove('is-active')
  //   bodyBlock.classList.remove('is-blocked')
  //   headerNavigation.classList.remove('is-show')
  // })

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
