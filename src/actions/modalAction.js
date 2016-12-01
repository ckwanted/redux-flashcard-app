import * as actionType from './types';

export const showModal = (type) => {
    return {
        type: actionType.SHOW_MODAL,
        payload: type
    }
};

export const closeModal = () => {
    return {
        type: actionType.CLOSE_MODAL
    }
};