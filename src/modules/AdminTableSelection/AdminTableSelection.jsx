import React from 'react';
import CardSelector from '../../components/CardSelector/CardSelector';
import { useNavigate } from 'react-router-dom';
import classes from './AdminTableSelection.module.css'
import Card from '../../UI/Card/Card';

const AdminTableSelection = () => {
    const navigate = useNavigate()

    return (
        <CardSelector title={"Доступные данные"} className={classes.AdminTableSelection}>
            <Card className={classes.Card}>
                <img src={process.env.PUBLIC_URL + "img/customers.png"} className={classes.Image}/>
                <h3 className={classes.CardHeader}>Заказчики</h3>
            </Card>
            <Card className={classes.Card}>
                <img src={process.env.PUBLIC_URL + "img/people.jpg"} className={classes.Image}/>
                <h3 className={classes.CardHeader}>Сотрудники</h3>
            </Card>
            <Card className={classes.Card} onClick={() => navigate("/posts")}>
                <img src={process.env.PUBLIC_URL + "img/posts.png"} className={classes.Image}/>
                <h3 className={classes.CardHeader}>Должности</h3>
            </Card>
            <Card className={classes.Card} onClick={() => navigate("/crop-types")}>
                <img src={process.env.PUBLIC_URL + "img/crop_types.jpg"} className={classes.Image}/>
                <h3 className={classes.CardHeader}>Типы сельхоз культур</h3>
            </Card>
            <Card className={classes.Card}>
                <img src={process.env.PUBLIC_URL + "img/machine_types.jpg"} className={classes.Image}/>
                <h3 className={classes.CardHeader}>Типы сельхоз техники</h3>
            </Card>
            <Card className={classes.Card}>
                <img src={process.env.PUBLIC_URL + "img/equipment_types.png"} className={classes.Image}/>
                <h3 className={classes.CardHeader}>Типы селькохоз оборудования</h3>
            </Card>
            <Card className={classes.Card}>
                <img src={process.env.PUBLIC_URL + "img/machine_equipment_types.jpg"} className={classes.Image}/>
                <h4 className={classes.CardHeader}>Совместимость типов оборудования и техники</h4>
            </Card>
            <Card className={classes.Card} onClick={() => navigate("/statuses")}>
                <img src={process.env.PUBLIC_URL + "img/statuses.jpg"} className={classes.Image}/>
                <h3 className={classes.CardHeader}>Статусы сельхоз техники</h3>
            </Card>
            <Card className={classes.Card} onClick={() => navigate("/reports/field-harvesting")}>
                <img src={process.env.PUBLIC_URL + "img/report.jpg"} className={classes.Image}/>
                <h3 className={classes.CardHeader}>Отчет по уборке полей заказчика</h3>
            </Card>
        </CardSelector>
    );
};

export default AdminTableSelection;