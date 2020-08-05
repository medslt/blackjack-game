import {getFirstCards} from '../../utils';
const updateGameReducer = (state, action) => {
    const {deck, wallet } = action.payload
    const { updatedDeck, player, dealer } = getFirstCards(deck);

    return {
        deck: updatedDeck,
        dealer,
        player,
        wallet,
        currentBet: null,
        gameOver: false,
        message: null
      };
}


export {updateGameReducer};