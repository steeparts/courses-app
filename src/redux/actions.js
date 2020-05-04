import {
    SET_APP_IS_READY,
    SET_COURSES,
    SET_GENRES,
    SET_GRADES,
    SET_SUBJECTS,
    SET_ACTIVE_UNIT,
    SET_FILTER_PARAMS,
    SET_SEARCH_PHRASE,
} from './types';
import {coursesAPI} from '../api';

export const configureData = () => {
    return async dispatch => {
        const courses = await coursesAPI.getCourses();
        dispatch({type: SET_COURSES, payload: courses});

        const subjects = [];
        courses.map(course => !subjects.includes(course.subject) && subjects.push(course.subject));
        dispatch({type: SET_SUBJECTS, payload: subjects.sort()});

        const genres = [];
        courses.map(course => !genres.includes(course.genre) && genres.push(course.genre));
        dispatch({type: SET_GENRES, payload: genres.sort()});

        const grades = [];
        courses.map(course => course.grade.split(';')
            .map(courseGrade => !grades.includes(courseGrade) && grades.push(courseGrade))
        );
        dispatch({type: SET_GRADES, payload: grades.sort((a, b) => a - b)});

        dispatch({type: SET_APP_IS_READY, payload: true});
    };
};

export const changeUnit = unit => {
    return dispatch => {
        localStorage.setItem('unit', unit);
        dispatch({type: SET_ACTIVE_UNIT, payload: unit});
    };
};

export const applyFilter = params => dispatch => dispatch({
    type: SET_FILTER_PARAMS, payload: {
        subject: params.subject || 'all',
        genre: params.genre || 'all',
        grade: params.grade || 'all'
    }
});

export const updateSearchPhrase = phrase => dispatch => dispatch({type: SET_SEARCH_PHRASE, payload: phrase});

export const getFilteredCourses = state => {
    const filterBySubject = (appliedSubject, subject) =>
        appliedSubject !== 'all' ? subject === appliedSubject : true;

    const filterByGenre = (appliedGenre, genre) =>
        appliedGenre !== 'all' ? genre === appliedGenre : true;

    const filterByGrade = (appliedGrade, grade) =>
        appliedGrade !== 'all' ? grade.split(';').includes(appliedGrade) : true;

    const searchCourses = (query, term) => term.toLowerCase().includes(query.toLowerCase());

    const courses = state.courses.courses;
    const filterParams = state.filter.params;
    const searchPhrase = state.search.searchPhrase;

    return courses.filter(course =>
        filterBySubject(filterParams.subject, course.subject) &&
        filterByGenre(filterParams.genre, course.genre) &&
        filterByGrade(filterParams.grade, course.grade) &&
        searchCourses(searchPhrase, course.subject)
    );
};
