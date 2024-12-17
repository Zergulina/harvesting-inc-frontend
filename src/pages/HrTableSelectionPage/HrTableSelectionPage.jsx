import React from 'react';
import classes from '../Page.module.css'
import HrTableSelection from '../../modules/HrTableSelection/HrTableSelection';

const HrTableSelectionPage = () => {
    return (
        <div className={classes.TablePage}>
            <HrTableSelection/>
        </div>
    );
};

export default HrTableSelectionPage;