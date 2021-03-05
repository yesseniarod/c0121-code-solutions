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


function createDeck () {
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

function shuffleCards (cardDeck) {

for (var x = 0; x < cardDeck.length; x++) {
  var currentCard = cardDeck[x];
  var randomCard = Math.floor(Math.random() * cardDeck.length);
  cardDeck[x] = cardDeck[randomCard];
  cardDeck[randomCard] = currentCard;
  }
}

var cards = createDeck();
shuffleCards(cards);
// console.log(cards);

// deal two cards to each player
// make this into a function to reduce repetition

players[0].hand = cards.splice(0,2);
// console.log(players[0].hand);

players[1].hand = cards.splice(0,2);
// console.log('player2:', players[1].hand);

players[2].hand = cards.splice(0, 2);
// console.log('player3:', players[2].hand);

players[3].hand = cards.splice(0, 2);
// console.log('player4:', players[3].hand);



// no two players should have the same cards
