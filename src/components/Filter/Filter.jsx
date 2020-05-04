import React from 'react';
import {Form, Field, reduxForm} from 'redux-form';
import './Filter.sass';

const FilterForm = props => {
    const {subjects, genres, grades, searchPhrase, handleSearch, handleSubmit, handleFilter} = props;
    return (
        <Form
            onSubmit={handleSubmit(params => handleFilter(params))}
            onChange={() => setTimeout(handleSubmit(params => handleFilter(params)))}
            className='filter-form'
        >
            <Field name='subject' component='select' className='filter-form__control'>
                <option value='all'>Все предметы</option>
                {subjects.map((subject, i) => <option value={subject} key={i}>{subject}</option>)}
            </Field>
            <Field name='genre' component='select' className='filter-form__control'>
                <option value='all'>Все жанры</option>
                {genres.map((genre, i) => <option value={genre} key={i}>{genre}</option>)}
            </Field>
            <Field name='grade' component='select' className='filter-form__control'>
                <option value='all'>Все классы</option>
                {grades.map((grade, i) => <option value={grade} key={i}>{grade} класс</option>)}
            </Field>
            <Field name='searchPhrase' onChange={e => handleSearch(e.target.value)} component='input'
                   type='text' placeholder='Поиск' autoComplete='off' value={searchPhrase}
                   className='filter-form__control'/>
        </Form>
    );
};

const FilterReduxForm = reduxForm({form: 'courses-filter'})(FilterForm);

const Filter = props => <FilterReduxForm {...props}/>;

export default Filter;
