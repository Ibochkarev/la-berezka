import { Swiper, Pagination, Navigation } from 'swiper'

Swiper.use([Pagination, Navigation])

let header = document.querySelector('.s-header'),
  headerBurger = document.querySelector('.s-header__burger'),
  languagesButton = document.querySelector('.s-header__language-button'),
  languagesList = document.querySelector('.s-header__languages'),
  // headerSearchButton = document.querySelector('.s-header__actions-search'),
  // mobileModalMenuClose = document.querySelector('.m-modal-menu__close'),
  mobileModalSearchClose = document.querySelector('.m-modal-search__close'),
  headerNavigation = document.querySelector('.s-header__nav'),
  mobileModalSearch = document.querySelector('.m-modal-search'),
  backdrop = document.querySelector('.backdrop'),
  bodyBlock = document.querySelector('body')

document.addEventListener('DOMContentLoaded', function () {
  // Открытие/Закрытие мега меню по клику на бургер
  headerBurger.addEventListener('click', () => {
    headerNavigation.classList.toggle('is-show')
    bodyBlock.classList.toggle('is-blocked')
  })

  // mobileModalMenuClose.addEventListener('click', () => {
  //   headerNavigation.classList.toggle('is-show')
  //   bodyBlock.classList.toggle('is-blocked')
  // })

  // Открытие/Закрытие модалки поиска по клику на кнопку поиска
  // headerSearchButton.addEventListener('click', () => {
  //   mobileModalSearch.classList.toggle('is-show')
  //   backdrop.classList.toggle('is-active')
  //   bodyBlock.classList.toggle('is-blocked')
  // })

  // mobileModalSearchClose.addEventListener('click', () => {
  //   mobileModalSearch.classList.toggle('is-show')
  //   backdrop.classList.toggle('is-active')
  //   bodyBlock.classList.toggle('is-blocked')
  // })

  // Закрытие модалки поиска по клику вне меню
  backdrop.addEventListener('click', () => {
    mobileModalSearch.classList.remove('is-show')
    backdrop.classList.remove('is-active')
    bodyBlock.classList.remove('is-blocked')
  })

  // Фиксация шапки при скроле
  const rootElement = document.documentElement

  function handleScrollPage() {
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight

    if (rootElement.scrollTop / scrollTotal > 0.15) {
      header.classList.add('is-fixed')
    } else {
      header.classList.remove('is-fixed')
    }
  }

  document.addEventListener('scroll', handleScrollPage)

  languagesButton.addEventListener('click', () => {
    languagesButton.classList.toggle('is-active')
    languagesList.classList.toggle('is-show')
  })
})
