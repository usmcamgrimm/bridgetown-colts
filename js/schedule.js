require('dotenv').config();

//let colts = document.getElementById('schedule')

fetch("https://sportspage-feeds.p.rapidapi.com/games?league=NFL&team=Indianapolis%20Colts", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "sportspage-feeds.p.rapidapi.com",
			"x-rapidapi-key": apiKeySched
		}
	})
	.then(response => {
		console.log(response);
	})
	.catch(err => {
		console.log(err);
	});