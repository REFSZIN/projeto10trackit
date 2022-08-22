import "./style.js";
import React from 'react'
import logo from "../../assets/images/logo.svg";
import Loader from "../Loader/Loader"
import UserContext from "../../UserContext.js"
import {Anime,LogoSign,FormSign,InputSign,BtnSign,SpanLink} from "./style.js";
import {useContext, useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
export default function Sing(){
    const {email,setEmail,password,setPassword,postSign,load,setLoad,localmenteLogado} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        localmenteLogado();
        setLoad(0);
    }, []);
    function login(event) {
        event.preventDefault();
        setLoad(1);
        postSign()
            .then(() => {
                setLoad(0);
                setTimeout(() => {
                    navigate("/hoje");
                }, 1000);
            })
            .catch(e => {
                alert(e.response.user.message);
                setLoad(0);
                navigate("/");
            });
    }
    return(
        <Anime>
            <LogoSign src={logo} alt="Track-It"/>
            <FormSign onSubmit={login}>
                <InputSign type="email" disabled={load} value={email} placeholder="email" onChange={e => setEmail(e.target.value)} required></InputSign>
                <InputSign type="password" disabled={load} value={password} placeholder="senha" onChange={e => setPassword(e.target.value)} required></InputSign>
                <BtnSign disabled={load} type="submit">
                    { load ? <Loader/> :`Entrar`}
                </BtnSign>
            </FormSign>
            <Link to="/cadastro"><SpanLink>Não tem uma conta? Cadastre-se!</SpanLink></Link>
        </Anime>
    );
};