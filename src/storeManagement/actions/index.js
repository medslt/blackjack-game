
const standAction = (dispatch) => () => {
    dispatch({type: 'STAND'});
}

const hitAction = (dispatch) => () => {
    dispatch({type: 'HIT'});
}

const updateGameAction = (dispatch) => (deck, wallet) => {
    const payload = {deck, wallet}
    dispatch({type: 'UPDATE_GAME', payload});
}

const placeBetAction = (dispatch) => (newCurrentBet) => {
    const payload = {newCurrentBet}
    dispatch({type: 'PLACE_BET', payload});
}

const updateMessageAction = (dispatch) => (message) => {
    const payload = {message}

    dispatch({type: 'UPDATE_MESSAGE', payload});
}
const buildAction = (dispatch) => {
    return {
        stand: standAction(dispatch),
        hit: hitAction(dispatch),
        updateGame: updateGameAction(dispatch),
        placeBet: placeBetAction(dispatch),
        updateMessage: updateMessageAction(dispatchEvent),
    }
}

export {buildAction};