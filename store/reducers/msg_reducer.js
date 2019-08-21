import { SEND_MESSAGE, CLEAR_MESSAGE } from '../types';

export default function(state=null, action) {
    switch(action.type) {
        case SEND_MESSAGE:
            return { ...state, sentEmail: action.payload }
        case CLEAR_MESSAGE:
            return { ...state, sentEmail: action.payload }
        default:
            return state;
    }
}