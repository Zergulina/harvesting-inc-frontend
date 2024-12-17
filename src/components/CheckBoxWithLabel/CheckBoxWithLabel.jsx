import React from 'react';
import CheckBox from '../../UI/CheckBox/CheckBox'

const CheckBoxWithLabel = ({value, setValue, label, isDisabled, className}) => {
    return (
        <div className={`${className}`}>
            <label htmlFor={label}>
                {label}
            </label>
            <CheckBox value={value} setValue={setValue} isDisabled = {isDisabled} name={label}/>
        </div>
    );
};

export default CheckBoxWithLabel;