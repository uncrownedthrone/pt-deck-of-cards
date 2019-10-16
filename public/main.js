let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
let faces = [
	{ name: 'Ace', value: 1 },
	{ name: 'Two', value: 2 },
	{ name: 'Three', value: 3 },
	{ name: 'Four', value: 4 },
	{ name: 'Five', value: 5 },
	{ name: 'Six', value: 6 },
	{ name: 'Seven', value: 7 },
	{ name: 'Eight', value: 8 },
	{ name: 'Nine', value: 9 },
	{ name: 'Ten', value: 10 },
	{ name: 'Jack', value: 11 },
	{ name: 'Queen', value: 12 },
	{ name: 'King', value: 13 }
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
	const formattedCard = `${randomCard.name} of ${randomCard.suit} with value of ${randomCard.value}`;
	const card =
		deck[roundedRandomIndex].name + ' of ' + deck[roundedRandomIndex].suit;
	qs('#firstCard').textContent = formattedCard;
};

const randomSecondCard = () => {
	const randomNumber = Math.random();
	const randomIndexNumber = randomNumber * 52;
	const roundedIndexNumber = Math.floor(randomIndexNumber);
	const randomCard = deck[roundedIndexNumber];
	const formattedCard = `${randomCard.name} of ${randomCard.suit} with value of ${randomCard.value}`;
	qs('#secondCard').textContent = formattedCard;
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
