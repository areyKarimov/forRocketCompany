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