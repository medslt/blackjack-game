import {getCount, getRandomCard} from './';

const drawDealerCard = (dealer, deck)  =>{
    const { randomCard, updatedDeck } = getRandomCard(deck);
  
    //Deep clone
    const newDealer = JSON.parse(JSON.stringify(dealer));
    
    newDealer.cards.push(randomCard);
    newDealer.count = getCount(newDealer.cards);

    return { dealer: newDealer, updatedDeck };
  }
  

const drawDealerCards = (dealer, deck) => {
    // Show dealer's 2nd card
    const randomCard = getRandomCard(deck);
    let newdeck = randomCard.updatedDeck;
    
    //Deep clone
    let drawedDealer = JSON.parse(JSON.stringify(dealer));
    //remove the empty card
    drawedDealer.cards.pop();
    drawedDealer.cards.push(randomCard.randomCard);
    drawedDealer.count = getCount(drawedDealer.cards);

    // Keep drawing cards until count is 17
    while(drawedDealer.count < 17) {
    const tmpDraw = drawDealerCard(drawedDealer, newdeck);

    drawedDealer = tmpDraw.dealer;
    newdeck = tmpDraw.updatedDeck;
    }

    return {deck: newdeck, dealer: drawedDealer}
}


export {drawDealerCards};