const labels_email = document.querySelectorAll('.email');
const labels_password = document.querySelectorAll('.password');
const email = document.querySelector('.input-email');
const password = document.querySelector('.input-password');
//****************************************************************** */


labels_email.forEach((label) => {
    label.innerHTML = label.innerHTML.split('').map((letter, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`).join('');
});



labels_password.forEach((label) => {
    label.innerHTML = label.innerHTML.split('').map((letter, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`).join('');
});


const span = document.querySelectorAll('span');

email.addEventListener('focus', () => {
    span.forEach((spans) => {
        spans.classList.add('active_pass');
        spans.classList.remove('active');

    })
})



password.addEventListener('click', () => {
    span.forEach((spans) => {
        spans.classList.add('active');
        spans.classList.remove('active_pass');

    })
})