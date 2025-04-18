// dropdowns
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
}

function toggleHours() {
    const dropdown = document.getElementById("hours-dropdown");
    dropdown.classList.toggle("show");
}

document.addEventListener("click", function(event){
    const menu = document.getElementById("dropdown");
    const menuToggle = document.querySelector(".menu-toggle");

    const hours = document.getElementById("hours-dropdown");
    const clockToggle = document.querySelector(".clock-toggle");

    if(!menuToggle.contains(event.target)){
        menu.classList.remove("show");
    }

    if (!clockToggle.contains(event.target)) {
        hours.classList.remove("show");
    }
})


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

    slides.forEach(slide => {slide.classList.remove('active')});

    slides[reviewIndex].classList.add('active')
}



// document.addEventListener("DOMContentLoaded", () => {
//     showSlides(reviewIndex)
// });


// active
document.addEventListener("DOMContentLoaded", () => {
    const navlinks = document.querySelectorAll(".navlink");
    const current = window.location.pathname;

    navlinks.forEach(link => {
        if (link.getAttribute('href') === current || link.getAttribute('href') === '.' + current){
            link.classList.add('active');
        }else{
            link.classList.remove('active');
        }
    });
});