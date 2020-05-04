import React from 'react';
import {connect, useSelector} from 'react-redux';
import {getFilteredCourses} from '../redux/actions';
import {CourseList} from '../components';

const CourseListContainer = props => {
    const courses = useSelector(state => getFilteredCourses(state));
    return <CourseList courses={courses} activeUnit={props.activeUnit}/>;
}

const mapStateToProps = state => ({
    activeUnit: state.app.activeUnit
});

export default connect(mapStateToProps)(CourseListContainer);
