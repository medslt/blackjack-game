import {
    getWinner,
    drawDealerCards
} from '../../utils';

const standReducer = (state) => {
    if (state.gameOver) {
        return({ message: 'Game over! Please start a new game.' });
    } 
    const {deck, dealer} = drawDealerCards(state.dealer, state.deck)
    let newWallet = state.wallet;
    let message; 

    if (dealer.count > 21) {
        newWallet = state.wallet + state.currentBet * 2;
        message = 'Dealer bust! You win!'
    } else {
        const winner = getWinner(dealer, state.player);
        if (winner === 'dealer') {
            message = 'Dealer wins...';
        } else if (winner === 'player') {
            newWallet += state.wallet + state.currentBet * 2;
            message = 'You win!';
        } else {
            newWallet += state.currentBet;
            message = 'Push.';
        }
    } 

    return {
        deck,
        dealer,
        wallet: newWallet,
        gameOver: true,
        message,
    };
}

export {standReducer};