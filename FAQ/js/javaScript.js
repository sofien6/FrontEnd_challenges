const btn = document.querySelectorAll('.toggle');
btn.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active');
    })
})