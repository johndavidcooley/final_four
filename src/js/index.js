// Javascript Entry Point

import $ from 'jquery';
import _ from 'lodash';

// import { Team } from './teams';
// import {oklahoma, villanova, virginia, northCarolina } from './teams';

class Team {
	constructor (name, mascot, image) {
		this.name = name;
		this.mascot = mascot;
		this.image = image;
	};
};


var northCarolina = new Team ('North Carolina', 'Tar Heels', '../images/north_carolina.png');
var oklahoma = new Team ('Oklahoma', 'Sooners', '../images/oklahoma.png');
var syracuse = new Team ('Syracuse', 'Orange', '../images/syracuse.png');
var villanova = new Team ('Villanova', 'Wildcats', '../images/villanova.png');


var gameOneWinner;
var gameTwoWinner;
var ncGameWinner;

function showWelcome() {
	$('.welcome').show();
}

function showWelcomeButtons() {
	$('.g1-special').show();
}
setTimeout(showWelcome, 1800);
setTimeout(showWelcomeButtons, 3500);


function showG1B() {
	$('.g1b').show();
};

function playGameOne() {
	var gameOneScore = Math.random();
	if (gameOneScore >= .4) {
		gameOneWinner = oklahoma;
	} else {
		gameOneWinner = villanova;
	};
	$('.game-one-winner').append(`
		${gameOneWinner.name} wins!`);
	return gameOneWinner;
};

$('.watch-game-1').on('click', function () {
	$('.welcome-screen').hide();
	$('.game-one').show();
	console.log("Game One");
	$('.game-one-html').append(`
		<img class="image" src='${villanova.image}'> VS <img class="image" src='${oklahoma.image}'>`);
setTimeout(playGameOne, 3000);
setTimeout(showG1B, 4000);
});





function showG2B() {
	$('.g2b').show();
};

function playGameTwo() {
	var gameTwoScore = Math.random();
	if (gameTwoScore >= .3) {
		gameTwoWinner = northCarolina;
	} else {
		gameTwoWinner = syracuse;
	};
	$('.game-two-winner').append(`
		${gameTwoWinner.name} wins!`);
	return gameTwoWinner;
};

$('.watch-game-2').on('click', function () {
	$('.game-one').hide();
	$('.game-two').show();
	console.log("Game Two");
	$('.game-two-html').append(`
		<img class="image" src='${northCarolina.image}'> VS <img class="image" src='${syracuse.image}'>`);
	setTimeout(playGameTwo, 3000);
	setTimeout(showG2B, 4000)
});





function showNCB() {
	$('.ncb').show();
};

function playNCGame() {
	var ncGameScore = Math.random();
	if (ncGameScore > .5) {
		ncGameWinner = gameOneWinner;
	} else {
		ncGameWinner = gameTwoWinner;
	};
	$('.nc-game-winner').append(`
		The ${ncGameWinner.name} ${ncGameWinner.mascot} are your 2016 National Champions!`);
};

$('.watch-nc-game').on('click', function () {
	$('.game-two').hide();
	$('.nc-game').show();
	console.log("National Championship Game");
	$('.nc-game-html').append(`
		<img class="image" src='${gameOneWinner.image}'> VS <img class="image" src='${gameTwoWinner.image}'>`);
	setTimeout(playNCGame, 3000);
	setTimeout(showNCB, 4000);
});











