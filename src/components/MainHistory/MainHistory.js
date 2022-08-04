import "./style.js";
import {MainHisto,TitleHisto,BoxCalendar} from "./style.js";
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import UserContext from "../../UserContext";
import { useContext, useEffect} from "react";
export default function MainHabit(){
    const {ParticlesJss,localmenteLogado} = useContext(UserContext);
    useEffect(() => {
        localmenteLogado()
    }, []);

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