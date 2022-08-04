import "./style.js";
import { Head,UserName, LogoHeader, UserImg, BoxUser} from "./style.js";
import logo from "../../assets/images/logoheader.svg"
import { Link } from "react-router-dom";
import React from 'react'
import UserContext from "../../UserContext";
import { useContext } from "react";

export default function Header(){
    const { name, image } = useContext(UserContext);
    return(
        <Head>
            <Link to="/"><LogoHeader src={logo}/></Link>
            <BoxUser>
                <UserName>{name}</UserName>
                <UserImg src={image}/>
            </BoxUser>
        </Head>
    )
}