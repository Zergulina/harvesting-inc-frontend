import React from 'react';
import CardSelector from '../../components/CardSelector/CardSelector';
import { useNavigate } from 'react-router-dom';
import classes from './DriverTableSelection.module.css'
import Card from '../../UI/Card/Card';

const DriverTableSelection = () => {
    const navigate = useNavigate()

    return (
        <CardSelector title={"Доступные данные"} className={classes.DriverTableSelection}>
            <Card className={classes.Card} onClick={() => navigate("/reports/machines")}>
                <img src={process.env.PUBLIC_URL + "img/report.jpg"} className={classes.Image}/>
                <h3 className={classes.CardHeader}>Отчет по несписанной технике</h3>
            </Card>
        </CardSelector>
    );
};

export default DriverTableSelection;