const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menu__button-active');
    menu.classList.toggle('menu-active');
    body.classList.toggle('hidden')
});