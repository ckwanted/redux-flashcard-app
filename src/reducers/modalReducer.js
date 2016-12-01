import * as actionType from '../actions/types';

export default (state = {active: false, card: null}, action) => {
    switch(action.type) {
        case actionType.SHOW_MODAL:
            return {
                ...state,
                active: true,
                card: action.payload
            };
        case actionType.CLOSE_MODAL:
            return {
                ...state,
                active: false,
                card: null
            };
        default:
            return state;
    }
}