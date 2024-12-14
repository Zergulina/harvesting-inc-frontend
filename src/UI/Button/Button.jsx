import React from 'react';
import classes from './Button.module.css'

const Button = ({ onClick, className, children }) => {
    return (
        <button className={`${classes.Button} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;