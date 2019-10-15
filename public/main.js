let suits = ['hearts', 'clubs', 'spades', 'diamonds'];
let faces = [
	{ name: 'ace', value: '1' },
	{ name: '2', value: '2' },
	{ name: '3', value: '3' },
	{ name: '4', value: '4' },
	{ name: '5', value: '5' },
	{ name: '6', value: '6' },
	{ name: '7', value: '7' },
	{ name: '8', value: '8' },
	{ name: '9', value: '9' },
	{ name: '10', value: '10' },
	{ name: 'Jack', value: '11' },
	{ name: 'Queen', value: '12' },
	{ name: 'King', value: '13' }
];
let deck = [];

const createDeck = () => {
	for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
		for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
			deck.push({
				suit: suits[suitIndex],
				name: faces[faceIndex].name,
				value: faces[faceIndex].value
			});
		}
	}
};

const randomFirstCard = () => {
	createDeck();
	const randomNumber = Math.floor(Math.random() * 52);
	const randomCard = deck[randomNumber];
	const formattedCard = `${randomCard.name} of ${randomCard.suit}`;
	document.querySelector('#firstCard').textContent = formattedCard;
};

const randomSecondCard = () => {
	const randomNumber = Math.random();
	const randomIndexNumber = randomNumber * 52;
	const roundedIndexNumber = Math.floor(randomIndexNumber);
	const randomCard = deck[roundedIndexNumber];
	const formattedCard = `${randomCard.name} of ${randomCard.suit} with value of ${randomCard.value}`;
	document.querySelector('#secondCard').textContent = formattedCard;
};

const main = () => {
	randomFirstCard();
	randomSecondCard();
	document
		.querySelector('#newFirstCard')
		.addEventListener('click', () => randomFirstCard());
	document
		.querySelector('#newSecondCard')
		.addEventListener('click', () => randomSecondCard());
};

document.addEventListener('DOMContentLoaded', main);
