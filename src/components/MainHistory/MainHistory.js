import "./style.js";
import {MainHisto,TitleHisto,BoxCalendar} from "./style.js";
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import UserContext from "../../UserContext";
import { useContext,useEffect } from "react";
import axios from "axios";
export default function MainHabit(){
    const {ParticlesJss, data ,setToken,setImage,setName,setData,setLoad} = useContext(UserContext);
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        useEffect(() => {
            if (localStorage.length > 0) {
                setLoad(1);
            axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
                {
                    email: data.email,
                    password: data.password,
                })
            .then(res => {
                setToken(res.data.token);
                setImage(res.data.image);   
                setName(res.data.name);   
                setData(res.data);
            })
            .catch(err => {
                alert(err.response.data.message);
            });}}, [])
        }
    return(
        <MainHisto>
            <TitleHisto>Histórico</TitleHisto>
            <BoxCalendar>
                <Calendar />
            </BoxCalendar>
            <ParticlesJss/>
        </MainHisto>
    );
};