var BURGER = document.querySelector('.js-burger');
var POPUPMENU = document.querySelector('.js-popUp-menu')
var PERMISSION = document.querySelector('.js-permission')
var PERMBAR = document.querySelector('.js-permissionJsBar')
var BUTTON = document.querySelectorAll('.js-button')
var POPUPHIRE = document.querySelector('.js-popUp-hireMe')
var CANCELMENU = document.querySelector('.js-cancelMenu')
var CANCELHIRE = document.querySelector('.js-cancelHire')
var MENU = document.querySelector('.menu')
var HIREME = document.querySelector('.hireMe')
var INPUT = document.querySelector('.hireMe__input')




PERMISSION.addEventListener('click', event => {
    PERMBAR.classList.add('hidden');
});


BURGER.addEventListener('click', event => {
    POPUPMENU.removeAttribute('style')
    POPUPMENU.classList.add('active')
    POPUPMENU.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
})
CANCELMENU.addEventListener('click', event => {
    POPUPMENU.classList.remove('active');
    POPUPMENU.classList.add('hidden');
    setTimeout(() => {
        POPUPMENU.setAttribute("style", "display:none;");
    }, 500);
    document.body.style.overflow = 'scroll';
});
POPUPMENU.addEventListener('click', event => {
    if (event.target !== MENU && event.target !== document.querySelector('.popUp__lang')) {
        POPUPMENU.classList.remove('active');
        POPUPMENU.classList.add('hidden');
        setTimeout(() => {
            POPUPMENU.setAttribute("style", "display:none;");
        }, 500);
        document.body.style.overflow = 'scroll';
    }
})


POPUPHIRE.addEventListener('click', event => {
    if (event.target == POPUPHIRE) {
        POPUPHIRE.classList.remove('active');
        POPUPHIRE.classList.add('hidden');
        setTimeout(displayBlock(POPUPHIRE), 500);
        document.body.style.overflow = 'scroll';
    }
})
CANCELHIRE.addEventListener('click', event => {
    POPUPHIRE.classList.remove('active');
    POPUPHIRE.classList.add('hidden');
    setTimeout(() => {
        POPUPHIRE.setAttribute("style", "display:none;");
    }, 500);
    document.body.style.overflow = 'scroll';
});

[...BUTTON].forEach(btn => {
    btn.addEventListener('click', event => {
        POPUPHIRE.removeAttribute('style')
        POPUPHIRE.classList.add('active');
        POPUPHIRE.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

});


/* $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
}); */