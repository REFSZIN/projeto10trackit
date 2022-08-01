import "./style.js";
import {Anime, LogoSign , FormSign , InputSign, BtnSign,SpanLink } from "./style.js";
import logo from "../../assets/images/logo.svg";
import { Link, useNavigate  } from "react-router-dom";
import Loader from "../Loader/Loader"
import axios from "axios";
import UserContext from "../../contexts/UserContext.js";
import { useState,useContext } from "react";
import React from 'react'

export default function Sing(){
    const URL =`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;
    const {setToken, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [load,setLoad] = useState(0);

    function login(event){
        event.preventDefault();
        setLoad(1);
        const promise = axios.post(URL,
        {
            email, password
        });
        promise.then(response => {
            setLoad(0)
            setToken(response.data.token);
            setUser(response.data);
            navigate("/habitos");
        });
        promise.catch(error => {
            setLoad(0);
            alert(error.response.data.message);
        });
    };
    return(
        <Anime>
            <LogoSign src={logo} alt="Track-It"/>
            <FormSign onSubmit={login}>
                <InputSign type="email" disabled={load} value={email} placeholder="email"onChange={e => setEmail(e.target.value)} required></InputSign>
                <InputSign type="password" disabled={load} value={password} placeholder="senha" onChange={e => setPassword(e.target.value)} required></InputSign>
                <BtnSign disabled={load} type="submit" >{ load ? <Loader/> :`Entrar`}</BtnSign>
            </FormSign>
            <Link to="/cadastro"><SpanLink>Não tem uma conta? Cadastre-se!</SpanLink></Link>
        </Anime>
    );
};