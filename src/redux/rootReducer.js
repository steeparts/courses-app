import {combineReducers} from 'redux';
import coursesReducer from './coursesReducer';
import filterReducer from './filterReducer';
import searchReducer from './searchReducer';
import appReducer from './appReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    courses: coursesReducer,
    filter: filterReducer,
    search: searchReducer,
    app: appReducer,
    form: formReducer
});

export default rootReducer;
