import "./import/sections";
import "./import/components";

const scrollToTopBtn = document.querySelector('.scrollToTopBtn'),
  rootElement = document.documentElement

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if (rootElement.scrollTop / scrollTotal > 0.15) {
    scrollToTopBtn.classList.add('is-active')
  } else {
    scrollToTopBtn.classList.remove('is-active')
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
scrollToTopBtn.addEventListener('click', scrollToTop)
document.addEventListener('scroll', handleScroll)
