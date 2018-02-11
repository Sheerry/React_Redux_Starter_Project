import {
    ITEM_ADDED,
    ITEM_DELETED
} from '../constants';


export const addItem = (item) => (dispatch) => {
    dispatch({ type: ITEM_ADDED, data: item });
};

export const deleteItem = (index) => (dispatch) => {
    dispatch({ type: ITEM_DELETED, data: index });
};