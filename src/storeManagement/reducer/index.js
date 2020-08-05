import {standReducer} from './standReducer';
import {updateGameReducer} from './updateGameReducer';
import {hitReducer} from './hitReducer';
import {placeBetReducer} from './placeBetReducer';

const  reducer = (state, action) => {
    switch (action.type) {
        case 'STAND':
            return {...state, ...standReducer(state)};
        case 'HIT':
            return {...state, ...hitReducer(state)};
        case 'UPDATE_GAME': 
            return {...state, ...updateGameReducer(state, action)};
        case 'PLACE_BET':
            return {...state, ...placeBetReducer(state, action)}
        case 'UPDATE_MESSAGE': 
            const {message} = action.payload;

            return {...state, message}
        default:
            break;
    }
  }

export {reducer};