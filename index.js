const link = document.querySelectorAll('.navlink');
link.forEach(item => {
    item.addEventListener('click', () => {
        e.preventDefault()
        // document.querySelector('.navlink.active')?.classList.remove('active');
        // item.classList.add('active');

        link.forEach(element => element.classList.remove('active'));
        this.classList.add('active')
    });
});
