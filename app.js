const mute = document.querySelector('.Mute');
const song = document.querySelector('.Song');
const test = document.querySelector('.Header');

function pauseAudio() {
    if (song.paused) {
        song.play();
        mute.style.color = 'white';
    } else {
        song.pause();
        mute.style.color = 'red';
        mute.style.WebkitTransition = 'color .3s';
    }
}

function animateHead() {
    test.classList.add('tracking-in-expand');
}

animateHead();

mute.addEventListener('click', pauseAudio);
