import "./style.js";
import {Anime, LogoRegis, FormRegis, InputRegis, BtnRegis, SpanLink } from "./style.js";
import logo from "../../assets/images/logo.svg"
import { Link,useNavigate  } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader.js";
import React from 'react'
export default function Sing(){
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const [password,setPassword] = useState('');
    const [loader,setLoader] = useState(1);

    function createUser(create){
        create.preventDefault();
        setLoader(0);
        const URL =`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;
        const promise = axios.post(URL,
        {
            email,name,image,password
        });
        promise.then( response => {
            setLoader(0);
            navigate("/");
        });
        promise.catch(error => {
            setLoader(0);
            alert(error.response.user.message);
        });
    };
    return(
        <Anime>
            <Link to="/" ><LogoRegis src={logo} alt="Track-It"/></Link>
            <FormRegis onSubmit={createUser}>
                <InputRegis disabled={!loader} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email"required ></InputRegis>
                <InputRegis disabled={!loader} type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required></InputRegis>
                <InputRegis disabled={!loader} type="text" value={name} onChange={e => setName(e.target.value)} placeholder="nome" required></InputRegis>
                <InputRegis disabled={!loader} type="url" value={image} onChange={e => setImage(e.target.value)} placeholder="foto" required></InputRegis>
                <BtnRegis>{ loader ? `Cadastrar`:<Loader/>}</BtnRegis>
            </FormRegis>
            <Link to="/" ><SpanLink>Já tem uma conta? Faça login!</SpanLink></Link>
        </Anime>
    );
};