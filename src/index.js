let swiper

window.onload = function() {
    swiper = new Swiper('.swiper-container', {loop: true})
}

function nextSlide() {
    swiper.slideNext()
}

function prevSlide() {
    swiper.slidePrev()
}