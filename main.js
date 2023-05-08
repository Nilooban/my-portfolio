const openBtn = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-icon');
const menu = document.querySelector('.menu');

openBtn.addEventListener('click', () => {
    menu.classList.add('open')
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open')
})