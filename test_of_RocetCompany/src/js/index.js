import Swiper from 'swiper';
const TABS = document.querySelectorAll('.equipment__tab');
const WRAPPERS = document.querySelectorAll('.equipment__body');
const SUBTABS = document.querySelectorAll('.equipment__sub-tab');
const SUBWRAPPERS = document.querySelectorAll('.equipment__inner');
const BTNORDERCALL = document.querySelectorAll('.js-order-call');
const BTNREQUEST = document.querySelectorAll('.js-request');
const POPUPCLOSE = document.querySelectorAll('.js-close');
const POPUPORDERCALL = document.querySelector('.js-pop-up-order-call');
const POPUPREQUEST = document.querySelector('.js-pop-up-request');
const POPUPS = document.querySelectorAll('.pop-up');




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
    let indCurrentTab = [...TABS].indexOf(currentTab);
    let indCurrentSubTab = [...SUBTABS].indexOf(currentTab);

    //click on tab and open aside-tabs which relative to this tabs, also get to the first aside-tab and equipment-inner class active.
    if ([...TABS].includes(currentTab)) {
        removeActiveClasses([...TABS], [...WRAPPERS]);
        removeActiveClasses([...SUBTABS], [...SUBWRAPPERS]);
        currentTab.classList.add('active');
        [...WRAPPERS][indCurrentTab].classList.add('active');
        [...WRAPPERS][indCurrentTab].querySelectorAll('.equipment__sub-tab')[0].classList.add('active');
        [...WRAPPERS][indCurrentTab].querySelectorAll('.equipment__inner')[0].classList.add('active');
        swiper();
    }

    // click on aside-tab and open relative equipment-inner to this tab
    if ([...SUBTABS].includes(currentTab)) {
        removeActiveClasses([...SUBTABS], [...SUBWRAPPERS]);
        currentTab.classList.add('active');
        [...SUBWRAPPERS][indCurrentSubTab].classList.add('active');
        swiper();
    }

    //click on btn order call and get pop-up order call vissible
    if ([...BTNORDERCALL].includes(currentTab)){
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
});



