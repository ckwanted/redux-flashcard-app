import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import cardReducer from './cardReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    routing: routerReducer,
    cardReducer,
    modalReducer
});