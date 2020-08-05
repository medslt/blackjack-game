import React from 'react';
import Hand from './Hand';
import styles from './Table.module.css';

const Table = ({player, dealer}) => {
    return (
        <div className={styles.table}>
            <h3>Dealer's Hand ({ dealer.count })</h3>
            <Hand cards={dealer.cards}/>

            <h3>Your Hand ({ player.count })</h3>
            <Hand cards={player.cards}/>
        </div>
    )
}

export default Table;