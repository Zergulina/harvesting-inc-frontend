import React from 'react';
import Card from '../../UI/Card/Card';
import classes from './RoleSelector.module.css'
import { useUserInfo } from '../../store/context/UserContextProvider';
import CardSelector from '../../components/CardSelector/CardSelector';
import { useNavigate } from 'react-router-dom';

const RoleSelector = () => {
    const { userInfo } = useUserInfo()
    const navigate = useNavigate()

    return (
        <CardSelector title={"Доступные режимы работы"}>
            {userInfo ? userInfo.posts.includes("Администратор предприятия") ?
                <Card className={classes.Card} onClick={()=>navigate("/admin")}>
                    <img src={process.env.PUBLIC_URL + "img/admin.jpg"} className={classes.Image} />
                    <h3>Администратор предприятия</h3>
                </Card> : <></> : <></>}
            {userInfo ? userInfo.posts.includes("Сотрудник отдела кадров") ?
                <Card className={classes.Card} onClick={()=>navigate("/hr")}>
                    <img src={process.env.PUBLIC_URL + "img/hr.jpg"} className={classes.Image} />
                    <h3>Сотрудник отдела кадров</h3>
                </Card> : <></> : <></>}
            {userInfo ? userInfo.posts.includes("Механизатор") ?
                <Card className={classes.Card} onClick={()=>navigate("/driver")}>
                    <img src={process.env.PUBLIC_URL + "img/driver.jpg"} className={classes.Image} />
                    <h3>Механизатор</h3>
                </Card> : <></> : <></>}
        </CardSelector>
    );
};

export default RoleSelector;