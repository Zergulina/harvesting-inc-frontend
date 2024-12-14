import React, { useEffect } from 'react';
import classes from './HomePage.module.css'
import { useUserInfo } from '../../store/context/UserContextProvider';
import axios from 'axios';
import { useAuth } from '../../app/routing/AuthProvider';
import RoleSelector from '../../modules/RoleSelector/RoleSelector';

const HomePage = () => {
    const { setUserInfo } = useUserInfo()
    const {token} = useAuth()

    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_API_PATH + "people/me", {headers: {Authorization: "Bearer " + token}})
            .then(result => {
                setUserInfo(result.data);
                console.log(result.data.posts)
            })
            .catch(msg => console.log(msg))

    }, [])
    return (
        <div className={classes.HomePage}>
            <RoleSelector/>
        </div>
    );
};

export default HomePage;