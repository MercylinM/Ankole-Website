
function toggleDropdown() {
    e.preventDefault()
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