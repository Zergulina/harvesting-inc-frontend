import React from 'react';
import CardSelector from '../../components/CardSelector/CardSelector';
import { useNavigate } from 'react-router-dom';
import classes from './HrTableSelection.module.css'
import Card from '../../UI/Card/Card';

const HrTableSelection = () => {
    const navigate = useNavigate()

    return (
        <CardSelector title={"Доступные данные"} className={classes.HrTableSelection}>
            <Card className={classes.Card}>
                <img src={process.env.PUBLIC_URL + "img/people.jpg"} className={classes.Image}/>
                <h3 className={classes.CardHeader}>Сотрудники</h3>
            </Card>
            <Card className={classes.Card}>
                <img src={process.env.PUBLIC_URL + "img/vacation.jpg"} className={classes.Image}/>
                <h3 className={classes.CardHeader}>График отпусков</h3>
            </Card>
            <Card className={classes.Card} onClick={() => navigate("/reports/people-experience")}>
                <img src={process.env.PUBLIC_URL + "img/report.jpg"} className={classes.Image}/>
                <h3 className={classes.CardHeader}>Отчет по сотрудникам</h3>
            </Card>
        </CardSelector>
    );
};

export default HrTableSelection;