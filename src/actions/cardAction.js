import * as actionType from './types';
import _ from 'lodash';

export const addCard = (card) => {
    return {
        type: actionType.ADD_CARD,
        payload: {
            ...card,
            id: _.uniqueId()
        }
    }
};

export const editCard = (card) => {
    return {
        type: actionType.EDIT_CARD,
        payload: card
    }
};