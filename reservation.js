// reservation page
document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('reservationForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const guest = document.getElementById('guest').value;
        const location = document.getElementById('location').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // validate phone and emails
        const phonePattern = /^[0-9]{10,13}$/;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number (10-13 digits).");
            return;
        }

        const isSuccess = true;
        if (isSuccess) {
            alert("Reservation successful! Thank you " + name + ".");
        } else {
            alert("Reservation failed. Please try again.");
        }

        // Redirect to homepage
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    })

});