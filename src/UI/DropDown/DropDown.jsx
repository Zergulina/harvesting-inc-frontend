import React from 'react';
import classes from './DropDown.module.css'

const DropDown = ({placeholder, options, selectedOption, setSelectedOption, className}) => {
    return (
        <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)} className={`${classes.DropDown} ${className}`}>
            <option selected hidden value="" >{placeholder}</option>
            {
                options.map((option) => 
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                )
            }
        </select>
    );
};

export default DropDown;