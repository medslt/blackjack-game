import React from 'react';
import Card from './Card';
import styles from './Hand.module.css';

const Hand = ({cards}) => {
    return (
        <div className={styles.handCards}>
            { cards.map((card, i) => (<Card key={i} number={card.number} suit={card.suit}/>)) }
        </div>
    )
}


export default Hand;