import React from 'react';
import classes from './DriverTableSelectionPage.module.css'
import DriverTableSelection from '../../modules/DriverTableSelection/DriverTableSelection';


const DriverTableSelectionPage = () => {
    return (
        <div className={classes.DriverTableSelectionPage}>
            <DriverTableSelection/>
        </div>
    );
};

export default DriverTableSelectionPage;