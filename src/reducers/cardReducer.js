import * as actionType from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case actionType.ADD_CARD:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}