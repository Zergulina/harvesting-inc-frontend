import React from 'react';
import classes from './Card.module.css'

const Card = ({children, className, onClick}) => {
    return (
        <div className={`${classes.Card} ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;