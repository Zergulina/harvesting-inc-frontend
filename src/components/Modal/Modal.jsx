import React from 'react';
import classes from './Modal.module.css'
import { BsX } from 'react-icons/bs';
import ReactDOM from 'react-dom';

const Modal = ({ isShown, closeCallback, children, className }) => {
    if (!isShown) return null;

    return ReactDOM.createPortal(
        <div className={classes.ModalWrapper}>
            <div className={`${classes.Modal} ${className}`}>
                <BsX className={classes.Cross} onClick={closeCallback} />
                {children}
            </div>
        </div>
        , document.body);
};

export default Modal;