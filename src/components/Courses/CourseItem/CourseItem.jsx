import React from 'react';
import './CourseItem.sass';
import {courseGradeFormatter, declOfNum} from '../../../utils';

const CourseItem = ({course, activeUnit}) => {
    const {courseId, subject, genre, grade, price, priceBonus, shopUrl} = course;

    const priceButton = activeUnit === 'price'
        ? `${price} руб.`
        : `${priceBonus} ${declOfNum(priceBonus, ['бонус', 'бонуса', 'бонусов'])}`;

    return (
        <div className='course-item'>
            <div className='course-item__figure'>
                <img src={`https://imumk.ru/svc/coursecover/${courseId}`} alt={subject}/>
            </div>
            <div className='course-item__info'>
                <p className='course-item__title'>{subject}</p>
                <p className='course-item__grade'>{courseGradeFormatter(grade)}</p>
                <p className='course-item__genre'>{genre}</p>
                <p className='course-item__meta'>
                    <a href={`https://imumk.ru/offer/${shopUrl.split('/').pop()}`}>Подробнее</a>
                </p>
                <p className='course-item__controls'>
                    <button>{priceButton}</button>
                </p>
            </div>
        </div>
    );
}

export default CourseItem;
