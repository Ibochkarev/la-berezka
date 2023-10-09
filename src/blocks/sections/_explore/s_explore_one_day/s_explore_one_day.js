const accordionButtons = document.querySelectorAll('.s-explore-one-day__item-button')

accordionButtons.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle('is-open')
    this.parentNode.classList.toggle('is-open')

    // let content = this.nextElementSibling

    // if (content.style.maxHeight) {
    //   content.style.height = null
    // } else {
    //   content.style.height = 'auto'
    // }
  }
})
