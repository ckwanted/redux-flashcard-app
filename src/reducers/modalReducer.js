import * as actionType from '../actions/types';

export default (state = false, action) => {
    switch(action.type) {
        case actionType.SHOW_MODAL:
            return true;
        case actionType.CLOSE_MODAL:
            return false;
        default:
            return state;
    }
}