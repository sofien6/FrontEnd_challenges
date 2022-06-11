const text = document.querySelector('#text');
const btn = document.querySelector('.btn');
const search = document.querySelector('.search');
btn.addEventListener('click', () => {
    /* toggle za3ma kima switch*/

    search.classList.toggle('active');
})