import React from 'react';
import classes from '../Page.module.css'
import CropTypeTable from '../../modules/CropTypeTable/CropTypeTable';

const CropTypePage = () => {
    return (
        <div className={classes.TablePage}>
            <CropTypeTable/>
        </div>
    );
};

export default CropTypePage;