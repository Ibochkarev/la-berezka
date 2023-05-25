window.addEventListener(
  'load',
  () => {
    if (!Cookies.get('acceptCookies')) {
      document.querySelector('.m-cookies').classList.add('is-show')
    }
    document.querySelector('.m-cookies__button').addEventListener('click', () => {
      document.querySelector('.m-cookies').classList.remove('is-show')
      setTimeout(function () {
        Cookies.set('acceptCookies', 'true', {
          expires: 7,
          path: '/',
        })
      })
    })
  },
  false,
)
