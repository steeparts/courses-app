import {SET_FILTER_PARAMS} from './types';

const initialState = {
    params: {
        subject: 'all',
        genre: 'all',
        grade: 'all'
    }
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_PARAMS:
            return {...state, params: action.payload};
        default:
            return state;
    }
};

export default filterReducer;
