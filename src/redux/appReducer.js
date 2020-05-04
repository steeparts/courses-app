import {SET_ACTIVE_UNIT, SET_APP_IS_READY} from './types';

const initialState = {
    appIsReady: false,
    units: [
        {type: 'price', value: 'рубли'},
        {type: 'priceBonus', value: 'бонусы'}
    ],
    activeUnit: localStorage.getItem('unit') || 'price'
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_UNIT:
            return {...state, activeUnit: action.payload};
        case SET_APP_IS_READY:
            return {...state, appIsReady: action.payload};
        default:
            return state;
    }
};

export default appReducer;
