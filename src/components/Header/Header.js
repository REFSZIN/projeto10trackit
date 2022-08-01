import "./style.js";
import { Head,UserName, LogoHeader, UserImg, BoxUser} from "./style.js";
import logo from "../../assets/images/logoheader.svg"
import { Link } from "react-router-dom";
import React from 'react'
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function Header(){
    const { user } = useContext(UserContext);

    return(
            <Head>
                <Link to="/"><LogoHeader src={logo}/></Link>
                    <BoxUser>
                        <UserName>{user.name}</UserName>
                        <UserImg src={user.image}/>
                    </BoxUser>
            </Head>
    )
}