import React from 'react';
import classes from '../Page.module.css'
import CropTable from '../../modules/CropTable/CropTable';

const CropTypePage = () => {
    return (
        <div className={classes.TablePage}>
            <CropTable/>
        </div>
    );
};

export default CropTypePage;