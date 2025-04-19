// reviews
let reviewIndex = 0;
showSlides(reviewIndex);

function plusSlides(n) {
    showSlides(reviewIndex += n);
}


function showSlides(n) {
    const slides = document.querySelectorAll(".testimony");

    if (n > slides.length) reviewIndex = 0;
    if (n < 0) reviewIndex = slides.length - 1;

    slides.forEach(slide => { slide.classList.remove('active') });

    slides[reviewIndex].classList.add('active')
}