const BURGER = document.querySelector('.js-burger');
const MENU = document.querySelector('.js-menu')
const LOGOBURGER = document.querySelector('.js-logo--menu-burger')
const BODY = document.body;


function isOverflowHidden(el) {
    if (el.getAttribute('style') == 'overflow: hidden;') {
        el.removeAttribute('style');
    } else {
        el.style.overflow = 'hidden';
    }
}

BURGER.addEventListener('click', event => {
    isOverflowHidden(BODY);
    BURGER.classList.toggle('active');
    MENU.classList.toggle('active');
})
document.body.addEventListener('click', event => {
    if (!event.target.closest('.js-burger')) {
        BURGER.classList.remove('active');
        MENU.classList.remove('active');
        BODY.removeAttribute('style');
    }
});