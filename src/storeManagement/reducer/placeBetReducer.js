const placeBetReducer = (state, action) => {
    const {newCurrentBet } = action.payload
    const { wallet} = state;

    if (newCurrentBet > wallet) {
        return {message: 'Insufficient funds to bet that amount.'};
    }  
    if (newCurrentBet % 1 !== 0) {
        return {message: 'Please bet whole numbers only.'};
    } 
    const newWallet = wallet - newCurrentBet;

    return {
        wallet: newWallet,
        currentBet: newCurrentBet
    }
}


export {placeBetReducer};