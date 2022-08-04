import "./style.js";
import React from 'react'
import logo from "../../assets/images/logo.svg";
import Loader from "../Loader/Loader"
import UserContext from "../../UserContext.js"
import {Anime,LogoSign,FormSign,InputSign,BtnSign,SpanLink} from "./style.js";
import {useContext, useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
export default function Sing(){
    const {email,setEmail,password,setPassword,postSign,load,setLoad,data,setData,setToken,setImage,setName} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
    if (localStorage.length > 0) {
        setLoad(1);
    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        {
            email: data.email,
            password: data.password,
        });
    promise.then(res => {
        setToken(res.data.token);
        setImage(res.data.image);   
        setName(res.data.name);   
        setData(res.data);
        setLoad(0);
        navigate("/hoje");
    });
    promise.catch(err => {
        alert(err.response.data.message);
        setLoad(0);
    });}}, [])
    const login = (event) => {
        event.preventDefault();
        setLoad(1);
        postSign ()
        .then(() => {
            navigate("/hoje");
        })
        .catch(e => {
            alert(e.response.user.message);
        });
    };
    return(
        <Anime>
            <LogoSign src={logo} alt="Track-It"/>
            <FormSign onSubmit={login}>
                <InputSign type="email" disabled={load} value={email} placeholder="email"onChange={e => setEmail(e.target.value)} required></InputSign>
                <InputSign type="password" disabled={load} value={password} placeholder="senha" onChange={e => setPassword(e.target.value)} required></InputSign>
                <BtnSign disabled={load} type="submit">
                    { load ? <Loader/> :`Entrar`}
                </BtnSign>
            </FormSign>
            <Link to="/cadastro"><SpanLink>Não tem uma conta? Cadastre-se!</SpanLink></Link>
        </Anime>
    );
};