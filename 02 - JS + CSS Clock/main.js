const secondHand = document.querySelector('.second-hand');
const minHand    = document.querySelector('.min-hand');
const hourHand   = document.querySelector('.hour-hand');

const setSecond = () => {
	const now = new Date();
	const secondsDegrees = ((now.getSeconds() / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

const setMin = () => {
	const now = new Date();
	const minsDegrees = ((now.getMinutes() / 60) * 360) + 90;
	minHand.style.transform = `rotate(${minsDegrees}deg)`;
}

const setHour = () => {
	const now = new Date();
	const hoursDegrees = ((now.getMinutes() / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setSecond();
setMin();
setHour();

setInterval(setSecond, 1000);
setInterval(setMin, 10000);
setInterval(setHour, 100000);