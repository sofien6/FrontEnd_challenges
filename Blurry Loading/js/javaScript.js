const bg = document.querySelector('.bg');
const load = document.querySelector('.loading');

let loads = 0;

/* Set interval t3awdlk el code kol khtra wela t3awd function chaque fois */

let int = setInterval(blurrin, 30);

function blurrin() {
    loads++;
    if (loads > 99) {
        clearInterval(int);
    }
    load.innerHTML = `${loads}%`;
    load.style.opacity = scale(loads, 0, 100, 1, 0);
    console.log(scale(loads, 0, 100, 1, 0) + 'opacity');
    bg.style.filter = `blur(${scale(loads,0,100,30,0)}px)`;
    console.log(scale(loads, 0, 100, 30, 0) + 'filter');

}

/* from 0 to 100 , from 30 to 0 */
const scale = (me, from, to, reality_from, reality_to) => {
    return ((me - from) * (reality_to - reality_from)) / (to - from) + reality_from;
}