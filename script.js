console.log('Welcome to Spotify')

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName : "1",filePath:"./songs/1.mp3",coverPath: "./covers/1.jpg"},
    {songName : "2",filePath:"./songs/2.mp3",coverPath: "./covers/2.jpg"},
    {songName : "3",filePath:"./songs/3.mp3",coverPath: "./covers/3.jpg"},
    {songName : "4",filePath:"./songs/4.mp3",coverPath: "./covers/4.jpg"},
    {songName : "5",filePath:"./songs/5.mp3",coverPath: "./covers/5.jpg"},
    {songName : "6",filePath:"./songs/6.mp3",coverPath: "./covers/6.jpg"},
    {songName : "7",filePath:"./songs/7.mp3",coverPath: "./covers/7.jpg"},
    {songName : "8",filePath:"./songs/8.mp3",coverPath: "./covers/8.jpg"},
    {songName : "9",filePath:"./songs/9.mp3",coverPath: "./covers/9.jpg"},
]

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
        
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
   
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})