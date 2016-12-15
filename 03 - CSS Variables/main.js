const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
	let value;
	
	if (this.type === 'range') {
		value = `${this.value}px`;
	} else {
		value = this.value;
	};

	document.documentElement.style.setProperty(`--${this.name}`, value);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));