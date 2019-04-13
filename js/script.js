/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
	{
		quote: "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.",
		source: "Milton Glaser",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.",
		source: "Paul Rand",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "You can have an art experience in front of a Rembrandt… or in front of a piece of graphic design.",
		source: "Stefan Sagmeister",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "Graphic design will save the world right after rock and roll does.",
		source: "David Carson",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "I’ve never had a problem with a dumb client. There is no such thing as a bad client. Part of our job is to do good work and get the client to accept it.",
		source: "Bob Gill",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "It’s through mistakes that you actually can grow. You have to get bad in order to get good.",
		source: "Paula Scher",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "If you do good work for good clients, it will lead to other good work for other good clients. If you do bad work for bad clients, it will lead to other bad work for other bad clients.",
		source: "Michael Bierut",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
		source: "Antoine de Saint-Exupéry",
		citation: "99designs.nl",
		year: 2013
	},
	{
		quote: "Never fall in love with an idea. They’re whores. If the one you’re with isn’t doing the job, there’s always, always, always another.",
		source: "Chip Kidd",
		citation: "v",
		year: 2013
	},
	{
		quote: "But I find that for myself, without exception, the more I deal with the work as something that is my own, as something that is personal, the more successful it is.",
		source: "Marian Bantjes:",
		citation: "99designs.nl",
		year: 2013
	}
];

console.log(quotes);



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote(array) {
	var randomNumber = Math.floor(Math.random() * array.length),
		quote = array[randomNumber];

	return quote;
}

console.log(getRandomQuote(quotes));


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
	var quote = getRandomQuote(quotes),
		html = "",
	quoteBox = document.getElementById('quote-box');

	html += '<p class="quote">' + quote.quote + '</p>';
	html += '<p class="source">' + quote.source;

	if (quote.citation) {
		html += '<span class="citation">' + quote.citation + '</span>';
	}

	if (quote.year) {
		html += '<span class="year">' + quote.year + '</span>';
	}

	html += '</p>';

	quoteBox.innerHTML = html;
}

printQuote();



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.