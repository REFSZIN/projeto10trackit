import "./style.js";
import {Anime, LogoRegis, FormRegis, InputRegis, BtnRegis, SpanLink } from "./style.js";
import logo from "../../assets/images/logo.svg"
import { Link,useNavigate  } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader.js";
import React from 'react'
import UserContext from "../../UserContext";
import { useContext } from "react";

export default function Sing(){
    const navigate = useNavigate();
    const [loader,setLoader] = useState(1);
    const {name, email, image, password ,setEmail,setPassword,setName,setImage} = useContext(UserContext);
    const [load,setLoad] = useState(0);
    function createUser(create){
        create.preventDefault();
        setLoader(1);
        const URL =`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;
        const promise = axios.post(URL,
        {
            email,name,image,password
        });
        promise.then(() => {
            setLoad(0);
            navigate("/");
        });
        promise.catch(e => {
            setLoad(0);
            alert(e.response.user.message);
        });
    };
    return(
        <Anime>
            <Link to="/" ><LogoRegis src={logo} alt="Track-It"/></Link>
            <FormRegis onSubmit={createUser}>
                <InputRegis disabled={!loader} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail"required ></InputRegis>
                <InputRegis disabled={!loader} type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" required></InputRegis>
                <InputRegis disabled={!loader} type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" required></InputRegis>
                <InputRegis disabled={!loader} type="url" value={image} onChange={e => setImage(e.target.value)} placeholder="Foto" required></InputRegis>
                <BtnRegis disabled={load} >
                    {!load?`Cadastrar`:<Loader/>}
                </BtnRegis>
            </FormRegis>
            <Link to="/" ><SpanLink>Já tem uma conta? Faça login!</SpanLink></Link>
        </Anime>
    );
};