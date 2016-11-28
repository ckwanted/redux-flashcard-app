import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import cardReducer from './cardReducer';

export default combineReducers({
    routing: routerReducer,
    cardReducer
});