const videoElement = document.querySelector('.player__video');
const controls = {
    playBtn       : document.querySelector('.player__button.toggle'),
    volumeSlider  : document.querySelector('.player__slider[name="volume"]'),
    rateSlider    : document.querySelector('.player__slider[name="playbackRate"]'),
    skipForward   : document.querySelector('.player__button[data-skip="25"]'),
    skipBackward  : document.querySelector('.player__button[data-skip="-10"]'),
};
console.log(controls);

class VideoPlayer {
    
    constructor(videoElement) {
        this.videoElement = videoElement;
        // @TODO: set default volume/rate levels and place slider in correct position
    }

    togglePlayback() {
        if (this.videoElement.paused) {
            this.play();
            return;
        }
        this.pause();
    }
    
    play() {
        this.videoElement.play();
    }

    pause() {
        this.videoElement.pause();
    }

    volume(event) {
        this.videoElement.volume = event.srcElement.value;
    }

    playbackRate(event) {
        this.videoElement.playbackRate = event.srcElement.value;
    }

    skipForward() {}

    skipBackward() {}
}

const videoPlayer = new VideoPlayer(videoElement);

// Attaching event listeners 
controls.playBtn.addEventListener('click', videoPlayer.togglePlayback.bind(videoPlayer));
controls.volumeSlider.addEventListener('change', videoPlayer.volume.bind(videoPlayer));
controls.rateSlider.addEventListener('change', videoPlayer.playbackRate.bind(videoPlayer));
