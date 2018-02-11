import {
    ITEM_ADDED,
    ITEM_DELETED
} from '../constants';
import initialState from '../store';

const items_reducer = (state = initialState.items, action) => {
    switch (action.type) {
        case ITEM_ADDED:
            return [
                ...state,
                action.data
            ];
        case ITEM_DELETED:
            let newItems = state.filter((item, index)=>{ return index != action.data })
            return [...newItems];
        default:
            return state;
    }
};

export default items_reducer;