import React, {memo} from 'react';
import styles from './Card.module.css';

const Card = ({ number, suit }) => {
    const color = (suit === '♦' || suit === '♥') ? 'cardRed' : 'card';
    const combo = (number) ? `${number}${suit}` : null;
    
    return (
        <div className={styles[color]}>
            { combo }
        </div>
    );
  };


export default memo(Card);