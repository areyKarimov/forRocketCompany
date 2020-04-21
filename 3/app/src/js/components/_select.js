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