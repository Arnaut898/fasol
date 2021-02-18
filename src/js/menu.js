const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menu__button-active')
    menu.classList.toggle('menu-active')
})