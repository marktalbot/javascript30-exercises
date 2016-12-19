const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const locations = [];

fetch(endpoint)
	.then(response => response.json())
	.then(data     => locations.push(...data));

const searchField = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

function filterResults(value, locationsArray) {
	return locationsArray.filter(location => {
		const regex  = new RegExp(value, 'gi');
		return location.city.match(regex) || location.state.match(regex);
	});
}

searchField.addEventListener('keyup', function() {
	const matches = filterResults(this.value, locations);
	
	const html = matches.map(location => {
		return `
			<li>
				<span class="name">${location.city}, ${location.state}</span>
				<span class="population">${location.population}</span>
			</li>
		`;
	}).join('');
	
	suggestions.innerHTML = html;
});