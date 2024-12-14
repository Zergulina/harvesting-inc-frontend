import React from 'react';
import InputText from '../../UI/InputText/InputText';
import classes from './InputTextWithLabel.module.css'

const InputTextWithLabel = ({value, setValue, placeholder, label, isDisabled, className}) => {
    return (
        <div className={`${className} ${classes.InputTextWithLabel}`}>
            <label htmlFor={label}>
                {label}
            </label>
            <InputText value={value} setValue={setValue} placeholder={placeholder} isDisabled = {isDisabled} name={label}/>
        </div>
    );
};

export default InputTextWithLabel;