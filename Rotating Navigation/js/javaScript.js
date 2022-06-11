const container = document.querySelector('.container');
const close = document.querySelector('#close');
const open = document.querySelector('#open');

open.addEventListener('click', () => {
    container.classList.add('shownave');
})
close.addEventListener('click', () => {
    container.classList.remove('shownave');
})