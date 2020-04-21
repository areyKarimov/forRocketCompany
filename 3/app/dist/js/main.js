const selectHeader = document.querySelectorAll('.js-select__header');
const selectItem = document.querySelectorAll('.js-select__item');

const selectToggle = (el) => {
    el.parentElement.classList.toggle('active');
}

const selectChoose = (el) => {
    const text = el.innerText,
        select = el.closest('.select'),
        currentText = select.querySelector('.select__current');
    currentText.innerText = text;
    select.classList.remove('active');
}


[...selectHeader].forEach(item => {
    item.addEventListener('click', event => selectToggle(item));
});

[...selectItem].forEach(item => {
    item.addEventListener('click', event => selectChoose(item));
});
const sliderDot = document.querySelectorAll('.js-slider__dot');
const sliderImg = document.querySelectorAll('.js-slider__img');
let i = 2;


const slideImg = (el, counter) => {
    [...sliderDot].forEach(item => {
        item.classList.remove('active');
    });
    [...sliderImg].forEach(item => {
        item.classList.remove('active');
    });
    el.classList.add('active');
    switch (el) {
        case [...sliderDot][0]:
            [...sliderImg][0].classList.add('active');
            [...sliderImg][0].style.zIndex = counter;
            break;
        case [...sliderDot][1]:
            [...sliderImg][1].classList.add('active');
            [...sliderImg][1].style.zIndex = counter;
            break;
        case [...sliderDot][2]:
            [...sliderImg][2].classList.add('active');
            [...sliderImg][2].style.zIndex = counter;
            break;
        case [...sliderDot][3]:
            [...sliderImg][3].classList.add('active');
            [...sliderImg][3].style.zIndex = counter;
            break;
    }
    return i++;
}

[...sliderDot].forEach(item => {
    return item.addEventListener('click', event => slideImg(item, i));
})