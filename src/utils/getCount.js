const getCount = (cards) => {
    const rearranged = [];

    cards.forEach(card => {
      if (card.number === 'A') {
        rearranged.push(card);
      } else if (card.number) {
        rearranged.unshift(card);
      }
    });
    
    const count =  rearranged.reduce((total, card) => {
      if (card.number === 'J' || card.number === 'Q' || card.number === 'K') {
          return total + 10;
      }

      if (card.number === 'A') {
          return (total + 11 <= 21) ? total + 11 : total + 1;
      }

      return total + card.number;
    }, 0);

    return count;
  }


export {getCount};