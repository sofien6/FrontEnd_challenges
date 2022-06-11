const keys = document.querySelector('.insertion');
window.addEventListener('keydown', (clé) => {
    keys.innerHTML = `<div class="key">
    ${clé.key === ' ' ? 'Space' : clé.key}
    <small>event.key</small>
</div>a
<div class="key">
    ${clé.keyCode}
    <small>event.keyCode</small>
</div>
<div class="key">
    ${clé.code}
    <small>event.code</small>
</div>`
})