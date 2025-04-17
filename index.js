
function toggleDropdown() {
    document.getElementsByClassName("fa-bars").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it and click the links inside the dropdown
window.onclick = function (event) {
    if (!event.target.matches('.fa-bars')) {
        var dropdowns = document.getElementsByClassName("vertical-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let reviewIndex = 1;


function plusSlides(n) {
    console.log({reviewIndex});
    
    showSlides(reviewIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("testimony");
    
    if (n > slides.length) { reviewIndex = 1 }
    if (n < 1) { reviewIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[reviewIndex - 1].style.display = "block";
}

showSlides(reviewIndex);