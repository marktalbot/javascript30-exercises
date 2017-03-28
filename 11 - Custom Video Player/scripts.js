const player = document.querySelector('.player');

class VideoPlayer {
    
    constructor(player) {
        // @TODO: set default volume/rate levels and place slider in correct position
        this.player = player;
        this.bootstrap();
    }

    bootstrap() {
        this.selectPlayerElements();
        this.setEventListeners();
    }

    togglePlayback() {
        this.videoElement.paused ? this.play() : this.pause();
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

    selectPlayerElements() {
        this.videoElement        = this.player.querySelector('video');
        this.playBtnElement      = this.player.querySelector('.player__button.toggle');
        this.volumeSliderElement = this.player.querySelector('.player__slider[name="volume"]');
        this.rateSliderElement   = this.player.querySelector('.player__slider[name="playbackRate"]');
        this.skipForwardElement  = this.player.querySelector('.player__button[data-skip="25"]');
        this.skipBackwardElement = this.player.querySelector('.player__button[data-skip="-10"]');
    }

    setEventListeners() {
        this.playBtnElement.addEventListener('click', this.togglePlayback.bind(this));
        this.volumeSliderElement.addEventListener('change', this.volume.bind(this));
        this.rateSliderElement.addEventListener('change', this.playbackRate.bind(this));
        // @TODO: Add event listeners for skip buttons
    }
}

const videoPlayer = new VideoPlayer(player);