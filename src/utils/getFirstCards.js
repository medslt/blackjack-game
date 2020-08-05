import {getCount, getRandomCard} from './';

const getFirstCards = (deck) => {
    const playerCard1 = getRandomCard(deck);
    const dealerCard1 = getRandomCard(playerCard1.updatedDeck);
    const playerCard2 = getRandomCard(dealerCard1.updatedDeck);    
    
    const playerStartingHand = [playerCard1.randomCard, playerCard2.randomCard];
    const dealerStartingHand = [dealerCard1.randomCard, {}];
    
    const player = {
        cards: playerStartingHand,
        count: getCount(playerStartingHand)
    };

    const dealer = {
        cards: dealerStartingHand,
        count: getCount(dealerStartingHand)
    };
    
    return {updatedDeck: playerCard2.updatedDeck, player, dealer};
}


export {getFirstCards};