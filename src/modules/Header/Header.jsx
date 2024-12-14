import React from 'react';
import classes from './Header.module.css'
import { Outlet } from 'react-router-dom';
import { useUserInfo } from '../../store/context/UserContextProvider';

const Header = ({className}) => {
    const {userInfo} = useUserInfo()

    return (
        <>
       <header className={`${className} ${classes.Header}`}>
            <div>
                {userInfo ? userInfo.lastname + " " + userInfo.firstname + (userInfo.middlename ? " " + userInfo.middlename: "") : ""}
            </div>
       </header>
       <Outlet/>
       </>
    );
};

export default Header;