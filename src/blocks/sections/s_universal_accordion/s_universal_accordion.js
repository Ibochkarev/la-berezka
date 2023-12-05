const accordionButtons = document.querySelectorAll('.s-universal-accordion__item-button')

accordionButtons.forEach((accordion) => {
  accordion.onclick = function () {
    // Удалите класс 'is-open' у всех элементов
    accordionButtons.forEach((item) => {
      item.classList.remove('is-open')
      item.parentNode.classList.remove('is-open')
    })

    // Добавьте класс 'is-open' к текущему элементу
    this.classList.toggle('is-open')
    this.parentNode.classList.toggle('is-open')
  }
})
