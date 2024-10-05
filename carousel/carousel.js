

let carousel = document.querySelector('.carousel-row');
let nextBtn = document.querySelector('#chevron-right');
let prevBtn = document.querySelector('#chevron-left');
let slides = document.querySelectorAll('.slide')
let circles = document.querySelectorAll('.circle');

window.addEventListener('resize', (e) => {
    let offWidth = carousel.offsetWidth;

    carousel.style.height = `${offWidth / 2}px`
})

let counter = 0
nextBtn.addEventListener('click', () => {
    slides[counter].classList.remove('slide-active')
    circles[counter].classList.remove('circle-active')
    counter = (counter - 1 + slides.length) % slides.length
    slides[counter].classList.add('slide-active')
    circles[counter].classList.add('circle-active')
})
// ---
prevBtn.addEventListener('click', () => {
    slides[counter].classList.remove('slide-active')
    circles[counter].classList.remove('circle-active')
    counter = (counter + 1) % slides.length
    slides[counter].classList.add('slide-active')
    circles[counter].classList.add('circle-active')
})

let x = setInterval(() => {
    slides[counter].classList.remove('slide-active')
    circles[counter].classList.remove('circle-active')
    counter = (counter + 1) % slides.length
    slides[counter].classList.add('slide-active')
    circles[counter].classList.add('circle-active')
}, 3000);