const getWinner = (dealer, player) => {
    if (dealer.count > player.count) {
        return 'dealer';
    } 

    if (dealer.count < player.count) {
        return 'player';
    } 
    
    return 'push';
}

export {getWinner};