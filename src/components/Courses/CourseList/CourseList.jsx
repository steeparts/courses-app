import React from 'react';
import './CourseList.sass';
import CourseItem from '../CourseItem/CourseItem';

const CourseList = ({courses, activeUnit}) => {
    if (!courses.length) {
        return <div className='no-results'>В данный момент курсов нет</div>;
    }
    return (
        <div className='course-list'>
            {courses.map((course, i) => <CourseItem course={course} activeUnit={activeUnit} key={i}/>)}
        </div>
    );
};

export default CourseList;
