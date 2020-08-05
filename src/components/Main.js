import React, {useContext, memo, useEffect} from 'react';
import storeContext from '../storeManagement/storeContext';
import Wallet from './Wallet';
import Table from './Table';
import { getFullDeck } from '../utils';

import styles from './Main.module.css';

const Main = () => {
    const {state, actions} = useContext(storeContext);
    const {player, dealer, message} = state;

    useEffect(() => {
        startNewGame();
    },[])

    const startNewGame = () => {
        const deck = getFullDeck();
        actions.updateGame(deck, 100);
    }

    if (player === null) {
        return null
    }

    return (
        <div className={styles.main}>
        <h2 className={styles.message}>{message }</h2>
        <div className={styles.btns}>
            <button className={styles.btn} onClick={actions.hit}>Hit</button>
            <button className={styles.btn} onClick={actions.stand}>Stick</button>
            <button className={styles.btn} onClick={startNewGame}>New Game</button>
        </div>
        <Wallet/>
        <Table player={player} dealer={dealer}/>
        </div>
    ) 
}

  export default memo(Main);