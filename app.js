const mute = document.querySelector('.Mute');
const song = document.querySelector('.Song');

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

mute.addEventListener('click', pauseAudio);
