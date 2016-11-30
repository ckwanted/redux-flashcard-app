import * as actionType from './types';

export const showModal = () => {
    return {
        type: actionType.SHOW_MODAL
    }
};

export const closeModal = () => {
    return {
        type: actionType.CLOSE_MODAL
    }
};