import React from 'react';
import classes from './Header.module.css'
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { useUserInfo } from '../../store/context/UserContextProvider';

const Header = ({ className }) => {
    const { userInfo } = useUserInfo()

    return (
        <>
            <header className={`${className} ${classes.Header}`}>
                <div className={classes.HeaderPart}>
                    <div className={classes.OrganizationName}>
                        {process.env.REACT_APP_ORGANIZATION_NAME}
                    </div>
                    <div>
                        {userInfo ? userInfo.lastname + " " + userInfo.firstname + (userInfo.middlename ? " " + userInfo.middlename : "") : ""}
                    </div>
                </div>
                <div className={classes.HeaderPart}>
                    <NavLink className={classes.Logout} to={"/logout"}>Выйти</NavLink>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Header;