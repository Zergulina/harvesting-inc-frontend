import React from 'react';
import InputDate from '../../UI/InputDate/InputDate';
import classes from './InputDateWithLabel.module.css'

const InputDateWithLabel = ({value, setValue, placeholder, label, isDisabled, className}) => {
    return (
        <div className={`${className} ${classes.InputDateWithLabel}`}>
            <label htmlFor={label}>
                {label}
            </label>
            <InputDate value={value} setValue={setValue} placeholder={placeholder} isDisabled = {isDisabled} name={label}/>
        </div>
    );
};

export default InputDateWithLabel;