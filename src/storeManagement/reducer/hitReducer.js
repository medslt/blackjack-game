import {
    getRandomCard,
    getCount
} from '../../utils';

const hitReducer = (state) => {
    if (state.gameOver) {
        return({ message: 'Game over! Please start a new game.' });
    } 

    if (!state.currentBet) {
        return ({ message: 'Please place bet.' });
    } 

    const { randomCard, updatedDeck } = getRandomCard(state.deck);

    //Deep clone
    const player = JSON.parse(JSON.stringify(state.player));

    player.cards.push(randomCard);
    player.count = getCount(player.cards);

    if (player.count > 21) {
        // GAME OVER
        return({ player, gameOver: true, message: 'YOU BUST!' });
    } 
    
    return({ deck: updatedDeck, player });
}


export {hitReducer};