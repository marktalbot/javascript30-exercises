// ## Array Cardio Day 2
const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 },
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen in my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
];

// 1) Check if person *one* is at least 19 with Array.prototype.some()
const oneAdult = people.some(person => {
	const today = new Date();
	return (today.getFullYear() - person.year) >= 19;
});

console.log({oneAdult});

// 2) Check if every person is 19 with Array.prototype.every()
const allAdults = people.every(person => {
	const today = new Date();
	return (today.getFullYear() - person.year) >= 19;
});

console.log(allAdults);

// 3) Find the comment with ID 823423
const myId = comments.find(comment => comment.id === 823423);

console.log(myId);

// 4) Find comment with ID 823423 and delete it
const index = comments.findIndex(comment => {
	return comment.id === 823423;
});
comments.splice(index, 1);

console.table(comments);