window.addEventListener(
  'load',
  () => {
    if (!Cookies.get('acceptCookies')) {
      document.querySelector('.m-cookies').classList.add('is-show')
    }

    document.querySelector('.m-cookies__button--agree').addEventListener('click', () => {
      document.querySelector('.m-cookies').classList.remove('is-show')
      setTimeout(function () {
        Cookies.set('acceptCookies', 'true', {
          expires: 7,
          path: '/',
        })
      })
    })

    document.querySelector('.m-cookies__close').addEventListener('click', () => {
      document.querySelector('.m-cookies__close').classList.toggle('is-open')
      document.querySelector('.m-cookies__wrapper').classList.toggle('is-active')
    })
  },
  false,
)
