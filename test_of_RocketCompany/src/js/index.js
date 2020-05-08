import Swiper from 'swiper';
const TABS = document.querySelectorAll('.equipment__tab');
const WRAPPERS = document.querySelectorAll('.equipment__body');
const SUBTABS = document.querySelectorAll('.equipment__sub-tab');
const SUBWRAPPERS = document.querySelectorAll('.equipment__inner');
const BTNORDERCALL = document.querySelectorAll('.js-order-call');
const BTNREQUEST = document.querySelectorAll('.js-request');
const POPUPCLOSE = document.querySelectorAll('.js-close');
const POPUPS = document.querySelectorAll('.pop-up');
const SELECTSUBTAB = document.querySelectorAll('.js-select-subtab');
const SUBTABSWRAPPER = document.querySelectorAll('.equipment__sub-tabs');
const POPUPORDERCALL = document.querySelector('.js-pop-up-order-call');
const POPUPREQUEST = document.querySelector('.js-pop-up-request');
const BURGER = document.querySelector('.js-burger');
const BURGERMENU = document.querySelector('.js-menu-burger');
const BURGERSUBTAB = document.querySelector('.js-burger-subtab');
const BURGERSUBTABMENU = document.querySelector('.js-burger-subtab-menu');
const SELECTTAB = document.querySelector('.js-select-tab');





//tabs js

//remove all active classes from tabs
const removeActiveClasses = (tabs, wrappers) => {
    for (let i of tabs) {
        i.classList.remove('active');
    }
    for (let i of wrappers) {
        i.classList.remove('active');
    }
}



// pop-up js

//close pop-up on click on close button or on overflow click
const CLOSEPOPUP = (button, popup, curentEl) => {


    //click on close button
    if ([...POPUPCLOSE].includes(event.target)) {
        let currentCloseBtn = [...POPUPCLOSE].filter(el => el === event.target);
        currentCloseBtn[0].closest('.pop-up').classList.remove('active');
        currentCloseBtn[0].closest('.pop-up').classList.add('hidden');
        setTimeout(() => {
            currentCloseBtn[0].closest('.pop-up').setAttribute("style", "display:none;");       
        }, 500);
        document.body.style.overflow = 'scroll';
   }

   if ([...POPUPS].includes(event.target)) {
        popup.classList.remove('active');
        popup.classList.add('hidden');
        setTimeout(() => {
            popup.setAttribute("style", "display:none;");
        }, 500); 
        document.body.style.overflow = 'scroll';
    }
}



// swiper slider js

const swiper = () =>{
    new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1030: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            },
            320: {
                slidesPerView: 1,
                spaceBetweenSlides: 0
            }
        }
    }); 
}  


// after loading page, the first of tabs stand visible and run script on sliders.

window.document.addEventListener(('DOMContentLoaded'), function(){
    [...WRAPPERS][0].classList.add('active');
    swiper();
})



//watcher on clicks evets on page

window.document.addEventListener('click', event => {
    let currentTab = event.target;
    let indCurrentTab = [...TABS].indexOf(currentTab.closest('.equipment__tab'));
    let indCurrentSubTab = [...SUBTABS].indexOf(currentTab);

    //click on select
    if (event.target === SELECTTAB) {
        [...TABS].forEach(el => el.classList.toggle('active-select'));
        [...SUBTABSWRAPPER].forEach(el => el.classList.remove('active-select'));
    }


    //click on subselect
    if ([...SELECTSUBTAB].includes(event.target)) {
        [...SUBTABSWRAPPER].forEach(el => el.classList.toggle('active-select'));
    }

    //click on tab and open aside-tabs which relative to this tabs, also get to the first aside-tab and equipment-inner class active.
    if ([...TABS].includes(currentTab.closest('.equipment__tab'))) {
        removeActiveClasses([...TABS], [...WRAPPERS]);
        removeActiveClasses([...SUBTABS], [...SUBWRAPPERS]);
        currentTab.closest('.equipment__tab').classList.add('active');
        [...WRAPPERS][indCurrentTab].classList.add('active');
        [...WRAPPERS][indCurrentTab].querySelectorAll('.equipment__sub-tab')[0].classList.add('active');
        [...WRAPPERS][indCurrentTab].querySelectorAll('.equipment__inner')[0].classList.add('active');
        [...WRAPPERS].forEach(el => el.classList.remove('active-select'));
        SELECTTAB.innerHTML = [...TABS][indCurrentTab].innerHTML;
        [...TABS].forEach(el => el.classList.remove('active-select'));
        [...WRAPPERS][indCurrentTab].classList.add('active-select');
        swiper();
    }

    // click on aside-tab and open relative equipment-inner to this tab
    if ([...SUBTABS].includes(currentTab)) {
        removeActiveClasses([...SUBTABS], [...SUBWRAPPERS]);
        currentTab.classList.add('active');
        [...SUBWRAPPERS][indCurrentSubTab].classList.add('active');
        [...SUBTABS][indCurrentSubTab].closest('.equipment__body').firstElementChild.innerHTML = [...SUBTABS][indCurrentSubTab].innerHTML;
        [...SUBWRAPPERS].forEach(el => el.classList.remove('active-select'));
        [...SUBWRAPPERS][indCurrentSubTab].classList.add('active-select');
        [...SUBTABS].forEach(el => el.parentElement.classList.remove('active-select'));
        swiper();
    }

    //click on btn order call and get pop-up order call vissible
    if ([...BTNORDERCALL].includes(currentTab.closest('.js-order-call'))){
        POPUPORDERCALL.removeAttribute('style');
        POPUPORDERCALL.classList.add('active');
        POPUPORDERCALL.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    //click on btn request and get pop-up request vissible
    if ([...BTNREQUEST].includes(currentTab)){
        POPUPREQUEST.removeAttribute('style');
        POPUPREQUEST.classList.add('active');
        POPUPREQUEST.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    //calling close function of pup-up window, for review this function look at the top of this js file
    CLOSEPOPUP(BTNORDERCALL, POPUPORDERCALL, currentTab);
    CLOSEPOPUP(BTNREQUEST, POPUPREQUEST, currentTab);



    // burger action
    if (BURGER === currentTab || currentTab.closest('.js-burger')){
        BURGER.classList.toggle('active');
        BURGERMENU.classList.toggle('active');
    } else if (!currentTab.closest('.js-menu-burger')) {
        BURGER.classList.remove('active');
        BURGERMENU.classList.remove('active');
    }

    // burger subtab(service) action
    if (BURGERSUBTAB === currentTab || currentTab.closest('.js-burger-subtab')){
        BURGERSUBTABMENU.classList.toggle('active');
    }
});



