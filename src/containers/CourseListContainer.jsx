import React from 'react';
import {connect} from 'react-redux';
import {getFilteredCourses} from '../redux/actions';
import {CourseList} from '../components';

const CourseListContainer = props => <CourseList {...props}/>;

const mapStateToProps = state => ({
    courses: getFilteredCourses(state),
    activeUnit: state.app.activeUnit
});

export default connect(mapStateToProps)(CourseListContainer);
