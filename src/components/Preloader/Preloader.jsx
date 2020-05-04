import React from 'react';
import loader from './loader.gif';
import './Preloader.sass';

const Preloader = () => {
    return (
        <div className='preloader'>
            <img src={loader} alt="loader"/>
        </div>
    );
};

export default Preloader;
