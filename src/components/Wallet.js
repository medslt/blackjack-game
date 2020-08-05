import React, {useRef, useContext, memo} from 'react';
import storeContext from '../storeManagement/storeContext';
import {getFullDeck} from '../utils';
import styles from './Wallet.module.css';

const Wallet = () => {
    const inputEl = useRef(null);
    const {state, actions} = useContext(storeContext);

    const {wallet, currentBet, gameOver, deck} = state;

    const onClickPlaceBetBtn= () => {
        const newCurrentBet = +inputEl.current.value;
  
        actions.placeBet(newCurrentBet);
    }

    const continueGame = () => {
        if (wallet > 0) {
            const newDeck = (deck.length < 10) ? getFullDeck() : deck;
            actions.updateGame(newDeck, wallet);
        } else {
            actions.updateMessage('Game over! Please start a new game.');
        }
    }
    
    return (
        <div className={styles.wallet}>
            <p>Wallet: £{ wallet }</p>
            {
                !currentBet &&
                <div className={styles.placeBet}>            
                    <input type="text" ref={inputEl}/>
                    <button className={styles.btn} onClick={onClickPlaceBetBtn}>Place Bet</button>
                </div>
                
            }
            {
                gameOver &&
                <div className={styles.btns}>
                    <button className={styles.btn} onClick={continueGame}>Continue</button>
                </div>
                
            }
        </div>
    )
}

export default memo(Wallet);