import React from 'react';
import classes from './InputDate.module.css'

const InputDate = ({value, setValue, isDisabled, className}, props) => {
    return (
        <input type="date" checked={value} disabled={isDisabled} onChange={(e) => setValue(e.target.value)} className={`${classes.InputDate} ${className}`} {...props}/>
    );
};

export default InputDate;