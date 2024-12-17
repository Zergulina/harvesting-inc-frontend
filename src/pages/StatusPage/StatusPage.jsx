import React from 'react';
import classes from '../Page.module.css'
import StatusTable from '../../modules/StatusTable/StatusTable';

const StatusPage = () => {
    return (
        <div className={classes.TablePage}>
            <StatusTable/>
        </div>
    );
};

export default StatusPage;