const box = document.querySelectorAll('.scroll');
const container = document.querySelector('.conta');


let height = (window.innerHeight / 1.25) * 2 / 4;
console.log(height);
window.addEventListener('scroll', () => {

    box.forEach((boxe) => {
        //getBoundingClientRect RETURN all info of the div like x,y..
        let top = boxe.getBoundingClientRect().top;
        if (top < height) {
            boxe.classList.add('show');

        } else {
            boxe.classList.remove('show');
        }
    })
})

container.style.height = (box.length * 260) + 'px';
console.log(container.style.height);