// console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'player1',
    hand: null
  },

  {
    name: 'player2',
    hand: null
  },

  {
    name: 'player3',
    hand: null
  },

  {
    name: 'player4',
    hand: null
  }
];

function createDeck() {
  var rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cardDeck = [];

  for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < rank.length; j++) {
      cardDeck.push(rank[j] + suit[i]);
    }
  }
  return cardDeck;
}

function shuffleCards(cardDeck) {

  for (var x = 0; x < cardDeck.length; x++) {
    var currentCard = cardDeck[x];
    var randomCard = Math.floor(Math.random() * cardDeck.length);
    cardDeck[x] = cardDeck[randomCard];
    cardDeck[randomCard] = currentCard;
  }
}

var cards = createDeck();
shuffleCards(cards);

players.forEach((element, index, array) => {
  element.hand = cards.splice(0, 2);
});

// Find the winner
// create function to determine what player has a better hand
// rough draft function

// function findWinner(rank) {
//   var points = 0;
//   if (rank === 'A') {
//     points = 11;
//   } else if (rank === 'J' || rank === 'Q' || rank === 'K') {
//     points = 10;
//   } else {
//     Number(rank);
//   }
//   return points;
// }
