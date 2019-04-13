/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const quotes = [
	{
		quote: "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.",
		source: "Milton Glaser",
		profession: "Graphic designer",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.",
		source: "Paul Rand",
		profession: "Art director and graphic designer",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "You can have an art experience in front of a Rembrandt… or in front of a piece of graphic design.",
		source: "Stefan Sagmeister",
		profession: "Graphic designer and typographer",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "Graphic design will save the world right after rock and roll does.",
		source: "David Carson",
		profession: "Graphic designer, art director and surfer",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "I’ve never had a problem with a dumb client. There is no such thing as a bad client. Part of our job is to do good work and get the client to accept it.",
		source: "Bob Gill",
		profession: "Illustrator and graphic designer",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "It’s through mistakes that you actually can grow. You have to get bad in order to get good.",
		source: "Paula Scher",
		profession: "Graphic designer, painter and art teacher in design",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "If you do good work for good clients, it will lead to other good work for other good clients. If you do bad work for bad clients, it will lead to other bad work for other bad clients.",
		source: "Michael Bierut",
		profession: "Graphic designer, design critic and educator",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
		source: "Antoine de Saint-Exupéry",
		profession: "Pilot and writer",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "Never fall in love with an idea. They’re whores. If the one you’re with isn’t doing the job, there’s always, always, always another.",
		source: "Chip Kidd",
		profession: "Graphic designer",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "But I find that for myself, without exception, the more I deal with the work as something that is my own, as something that is personal, the more successful it is.",
		source: "Marian Bantjes:",
		profession: "Designer, artist, illustrator, typographer and writer",
		citation: "99designs.nl",
		year: 2013
	}
];


/*
* Pick a random quote from a provided array
*/

function getRandomQuote(array) {
	let randomNumber = Math.floor(Math.random() * array.length);

	return array[randomNumber];
}

/*
* Get a random RGB value
*/

function getRandomRGB() {
	let randomValue = function () {
			return Math.floor(Math.random() * 256)
		},
		redValue = randomValue(),
		greenValue = randomValue(),
		blueValue = randomValue(),
		colorRGB;

	colorRGB = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';

	return colorRGB ;
}

/*
* Set the color of the background
*/

function setBackgroundColor(value) {
 document.body.style.backgroundColor = value;
}

/*
* Print the quote to a specific container
*/

function printQuote() {
	let quote = getRandomQuote(quotes),
		html = "",
		quoteBox = document.getElementById('quote-box'),
		backgroundColor = getRandomRGB();

	html += '<p class="quote">' + quote.quote + '</p>';
	html += '<p class="source">' + quote.source;


	if (quote.profession) {
		html += '<span class="profession">' + quote.profession + '</span>';
	}

	if (quote.citation) {
		html += '<span class="citation">' + quote.citation + '</span>';
	}

	if (quote.year) {
		html += '<span class="year">' + quote.year + '</span>';
	}

	html += '</p>';

	quoteBox.innerHTML = html;
	setBackgroundColor( backgroundColor );
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*
* Run the entire stuff
* */

printQuote();
setInterval( printQuote, 20000 );