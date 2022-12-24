/*const open = document.getElementById('click-btn')
const close = document.getElementById('search-btn')
const container = document.querySelector('.search')

open.addEventListener('click', () => search.classList.add('show-nav'))

close.addEventListener('click', () => search.classList.remove('show-nav'))*/

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const question = document.querySelector('.click-btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

function showBtn() {
    question.style.display = "block";
    btn.style.display = "none";
}

function hideBtn() {
    question.style.display = "none";
    btn.style.display = "block";
}