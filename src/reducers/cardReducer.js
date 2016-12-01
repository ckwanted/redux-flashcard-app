import * as actionType from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case actionType.ADD_CARD:
            return [
                ...state,
                action.payload
            ];
        case actionType.EDIT_CARD:
            let newState = state.slice(0);
            newState[parseInt(action.payload.id) - 1] = action.payload;
            return newState;
        default:
            return state;
    }
}