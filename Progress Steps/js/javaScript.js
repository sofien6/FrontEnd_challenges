const progress = document.getElementById('progress');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const circles = document.querySelectorAll('.circles');

let currentActive = 0;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length - 1) {
        currentActive = circles.length - 1;
    }

    update();
});

previous.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 0;
    }

    update();
});

function update() {
    if (currentActive === 0) {
        previous.disabled = true;
    } else if (currentActive === circles.length - 1) {
        next.disabled = true;
    } else {
        next.disabled = false;
        previous.disabled = false;
    }
    circles.forEach((circle, index) => {
        if (index <= currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    // Calculate the width of progress
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

}