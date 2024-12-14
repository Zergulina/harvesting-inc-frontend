import React from 'react';
import classes from './AuthPage.module.css'
import Authorization from '../../modules/Authorization/Authorization';

const AuthPage = () => {
    return (
        <div className={classes.AuthPage}>
            <Authorization className={classes.AuthorizationContainer}/>
        </div>
    );
};

export default AuthPage;