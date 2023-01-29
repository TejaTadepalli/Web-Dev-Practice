const clicked = document.getElementById('clicked');
const bar = document.getElementById('bar');

clicked.addEventListener('click', () => {
    bar.classList.toggle('active');
});