import React from 'react';
import classes from './AdminTableSelection.module.css'
import AdminTableSelection from '../../modules/AdminTableSelection/AdminTableSelection';

const AdminTableSelectionPage = () => {
    return (
        <div className={classes.AdminTableSelectionPage}>
            <AdminTableSelection/>
        </div>
    );
};

export default AdminTableSelectionPage;