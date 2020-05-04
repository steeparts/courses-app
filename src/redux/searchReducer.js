import {SET_SEARCH_PHRASE} from './types';

const initialState = {
    searchPhrase: ''
};

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH_PHRASE:
            return {...state, searchPhrase: action.payload};
        default:
            return state;
    }
};

export default searchReducer;
