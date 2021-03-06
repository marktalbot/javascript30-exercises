// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

const people = ['Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filtered = inventors.filter(inventor => {
	return inventor.year > 1499 && inventor.year < 1599;
});

console.table(filtered);

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const names = inventors.map(inventor => {
	return Object.assign({}, { 
		first: inventor.first, 
		last: inventor.last
	});
});

console.table(names);

const names2 = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

console.log(names2);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sorted = inventors.sort((first, second) => {
	return first.year - second.year;
});

console.table(sorted);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, next) => {
	return total += (next.passed - next.year);
}, 0);

console.log('Total Years -> ', totalYears);

// 5. Sort the inventors by years lived
const yearsLived = inventors.sort((first, second) => {
	return (first.passed - first.year) - (second.passed - second.year);
});

console.table(yearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const streets = ["Boulevards of Paris","City walls of Paris","Thiers wall","Wall of Charles V","Wall of Philip II Augustus","City gates of Paris","Boulevards of the Marshals","Boulevard Auguste-Blanqui","Boulevard Barbès","Boulevard Beaumarchais","Boulevard de l'Amiral-Bruix","Boulevard de Strasbourg","Boulevard des Capucines","Boulevard de la Chapelle","Boulevard de Clichy","Boulevard du Crime","Boulevard Haussmann","Boulevard de l'Hôpital","Boulevard des Italiens","Boulevard de la Madeleine","Boulevard de Magenta","Boulevard Montmartre","Boulevard du Montparnasse","Boulevard Raspail","Boulevard Richard-Lenoir","Boulevard de Rochechouart","Boulevard Saint-Germain","Boulevard Saint-Michel","Boulevard de Sébastopol","Boulevard du Temple","Boulevard Voltaire","Boulevard de la Zone"];
const deStreets = streets.filter(street => street.includes(' de '));

console.log(deStreets);

// 7. sort Exercise
// Sort the people alphabetically by last name
const stortedPeople = people.sort((a, b) => a.localeCompare(b));

console.log('Sorted ppl -> ', stortedPeople);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transport = data.reduce((obj, item) => {
	
	if (! obj[item]) {
		obj[item] = 0;
	};
	
	obj[item]++;
	return obj;
}, {});

console.log(transport);