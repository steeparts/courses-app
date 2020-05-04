import {SET_COURSES, SET_GENRES, SET_GRADES, SET_SUBJECTS} from './types';

const initialState = {
    courses: [],
    subjects: [],
    genres: [],
    grades: []
};

const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COURSES:
            return {...state, courses: action.payload};
        case SET_SUBJECTS:
            return {...state, subjects: action.payload};
        case SET_GENRES:
            return {...state, genres: action.payload};
        case SET_GRADES:
            return {...state, grades: action.payload};
        default:
            return state;
    }
};

export default coursesReducer;
