const getRandomCard = (deck) =>{
    const updatedDeck = [...deck];

    const randomIndex = Math.floor(Math.random() * updatedDeck.length);
    const randomCard = updatedDeck[randomIndex];
      // remove random card from deck
      
    updatedDeck.splice(randomIndex, 1);
    return { randomCard, updatedDeck };
  }

  
export {getRandomCard};

