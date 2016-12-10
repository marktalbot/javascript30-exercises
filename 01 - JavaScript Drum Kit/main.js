const loadedClips = {};
const audioClips  = document.querySelectorAll('audio');
const keys        = document.querySelectorAll('.key');

audioClips.forEach((clip) => loadedClips[clip.dataset.key] = clip);
keys.forEach((key) => key.addEventListener('transitionend', removeHighlight));

const addHighlight = keyCode => {
	let key = document.querySelector(`.key[data-key="${keyCode}"]`);
	if (!key) {
		return;
	}
	key.classList.add('playing');
};

function removeHighlight(event) {
	if (event.propertyName !== 'transform') {
		return;
	};
	this.classList.remove('playing');
};

const playClip = keyCode => {
	if (!loadedClips[keyCode]) {
		return;
	};
	loadedClips[keyCode].currentTime = 0;
	loadedClips[keyCode].play();
};

document.addEventListener('keydown', event => {
	addHighlight(event.keyCode);
	playClip(event.keyCode);
});