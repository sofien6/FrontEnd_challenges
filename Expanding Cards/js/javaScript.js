const panels = document.querySelectorAll('.panel');

// chaque panel hna ghadi ykoun fih EventListener
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        panels.forEach((panel) => {
            panel.classList.remove('active');
        })
        panel.classList.add('active');
    })
});
console.log(panels.length)