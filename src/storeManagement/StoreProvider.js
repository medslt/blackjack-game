import React, {useReducer} from 'react';
import storeContext from './storeContext';
import {buildAction} from './actions';
import {reducer} from './reducer'
const {Provider} = storeContext;


const initialState = { 
    deck: [],
    dealer: null,
    player: null,
    wallet: 0,
    currentBet: null,
    gameOver: false,
    message: null
};

const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const actions = buildAction(dispatch);
 
    return (
        <Provider value={{state, actions}}>
            {children}
        </Provider>
    )
};


export default StoreProvider;

