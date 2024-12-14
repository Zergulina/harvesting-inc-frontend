import React, { useState } from 'react';
import classes from './Authorization.module.css'
import InputTextWithLabel from '../../components/InputTextWithLabel/InputTextWithLabel';
import Button from '../../UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../app/routing/AuthProvider';
import axios from 'axios';


const Authorization = ({ className }) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const {setToken} = useAuth();
    const navigate = useNavigate();

    const handleLogin = (newToken) => {
        setToken(newToken);
        navigate("/", { replace: true })
    }

    const sendLoginRequest = () => {
        axios.post(process.env.REACT_APP_SERVER_API_PATH + "account/login", { 'login': login, 'password': password })
            .then(result => {
                handleLogin(result.data.token)
            })
            .catch((err) => {
                console.log(err)
                alert("Неверный логин или пароль")
            })
    }

    return (
        <div className={`${className} ${classes.AuthorizationContainer}`}>
            <h1 className={classes.Header}>Вход</h1>
            <InputTextWithLabel label={"Логин"} value={login} setValue={setLogin} />
            <InputTextWithLabel label={"Пароль"} value={password} setValue={setPassword} />
            <Button className={classes.Button} onClick={sendLoginRequest}>Войти</Button>
        </div>
    );
};

export default Authorization;