class VideoPlayer {
    
    constructor(player) {
        this.player        = player;
        this.videoDuration = null;
        this.bootstrap();
    }

    bootstrap() {
        this.setPlayerElements();
        this.setEventListeners();
        this.setPlayerDefaults();
        this.setVideoDuration();
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

    skipForward() {
        console.log('clicked forward');
    }

    skipBackward() {
        console.log('clicked backward');
    }

    showVideoProgress() {       
        let played = Math.round(this.videoElement.currentTime / this.videoDuration * 1000);
        
        this.progressFilledElement.style.width     = `${played}px`;
        this.progressFilledElement.style.flexBasis = `${played}px`;
    }

    setPlayerDefaults() {
        this.progressFilledElement.style.width     = `${1}px`;
        this.progressFilledElement.style.flexBasis = `${1}px`;
    }

    setPlayerElements() {
        this.videoElement          = this.player.querySelector('video');
        this.playBtnElement        = this.player.querySelector('.player__button.toggle');
        this.volumeSliderElement   = this.player.querySelector('.player__slider[name="volume"]');
        this.rateSliderElement     = this.player.querySelector('.player__slider[name="playbackRate"]');
        this.skipForwardElement    = this.player.querySelector('.player__button[data-skip="25"]');
        this.skipBackwardElement   = this.player.querySelector('.player__button[data-skip="-10"]');
        this.progressElement       = this.player.querySelector('.progress');
        this.progressFilledElement = this.player.querySelector('.progress__filled');
    }

    setEventListeners() {
        this.playBtnElement.addEventListener('click', this.togglePlayback.bind(this));
        this.volumeSliderElement.addEventListener('change', this.volume.bind(this));
        this.rateSliderElement.addEventListener('change', this.playbackRate.bind(this));
        this.skipForwardElement.addEventListener('click', this.skipForward.bind(this));
        this.skipBackwardElement.addEventListener('click', this.skipBackward.bind(this));
        this.videoElement.addEventListener('loadedmetadata', this.setVideoDuration.bind(this));
        this.videoElement.addEventListener('timeupdate', this.showVideoProgress.bind(this));
    }

    setVideoDuration() {
        this.videoDuration = this.videoElement.duration;
    }
}

const player      = document.querySelector('.player');
const videoPlayer = new VideoPlayer(player);