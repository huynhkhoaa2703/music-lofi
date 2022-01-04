const song = document.getElementById("song");

const playBtn = document.querySelector(".player-inner");

const nextBtn = document.querySelector(".play-forward");

const prevBtn = document.querySelector(".play-back");

let isPlaying = true;
let indexSong = 0;

const musics = ['bluebirdbutlofi.mp3', 'hokage.mp3', 'kanaboon.mp3', 'tenki.mp3']

song.setAttribute("src", `/mp3/${musics[indexSong]}`);

nextBtn.addEventListener("click", function () {
    changeSong(1);
});

prevBtn.addEventListener("click", function () {
    changeSong(-1);
});

function changeSong(dir) {
    if (dir === 1) {
        indexSong++;
        if (indexSong >= musics.length) {
            indexSong = 0;
        }
        isPlaying = true;
    } else if (dir === -1) {
        indexSong--;
        if (indexSong < 0) {
            indexSong = musics.length -1;
        }
        isPlaying = true;
    }
    song.setAttribute("src", `/mp3/${musics[indexSong]}`);
    playPause();
}

playBtn.addEventListener("click", playPause);

function playPause() {
    if (isPlaying) {
        song.play();
        playBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
        isPlaying = false;
    } else {
        song.pause();
        playBtn.innerHTML = '<ion-icon name = "play" class = "play-icon"></ion-icon>'
        isPlaying = true;
    }
    
}