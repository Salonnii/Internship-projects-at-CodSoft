const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);



/* HEADER: active header when window scroll down to 100px */
window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 45) {
    header.classList.add('header-sticky');
  } else {
    header.classList.remove('header-sticky');
  }
});
