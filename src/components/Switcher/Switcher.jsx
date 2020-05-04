import React from 'react';
import cn from 'classnames';
import './Switcher.sass';

const Switcher = ({units, activeUnit, changeUnit}) => {
    return (
        <div className='switcher'>
            {units.map((unit, i) =>
                <button
                    onClick={() => changeUnit(unit.type)}
                    value={unit.type}
                    className={
                        cn('switcher__item', {'switcher__item_active': unit.type === activeUnit})
                    }
                    key={i}
                >{unit.value}</button>
            )}
        </div>
    );
}

export default Switcher;
