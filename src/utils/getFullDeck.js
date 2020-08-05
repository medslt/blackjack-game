let deck;

const getFullDeck = () => {
    if (!deck) {
        const suits = ['♦','♣','♥','♠'];
        const cards = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
        deck = [];

        for (let i = 0; i < cards.length; i++) {
          for (let j = 0; j < suits.length; j++) {
            deck.push({number: cards[i], suit: suits[j]});
          }
        }
    }
    return deck;
  }

export {getFullDeck};