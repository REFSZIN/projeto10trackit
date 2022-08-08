import "./style.js";
import {MainHisto,TitleHisto,BoxCalendar} from "./style.js";
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import UserContext from "../../UserContext";
import { useContext, useEffect, useState} from "react";
import moment from "moment";
export default function MainHabit(){
    const {ParticlesJss,localmenteLogado,historicData} = useContext(UserContext);
    const [calDate, setCalDate] = useState(new Date());
    let aux = []
    useEffect(() => {
        localmenteLogado();
    }, []);
    function onChange(calDate) {
        setCalDate(calDate) 
    }
    for (let i = 0; i < historicData.length; i++) {
        aux.push(historicData[i].day[0] + historicData[i].day[1]);
    }
    return(
        <MainHisto>
            <TitleHisto>Histórico</TitleHisto>
            <BoxCalendar>
                <Calendar
                onChange={onChange}
                value={calDate}
                locale={'pt-br'}
                tileClassName={({ date }) => {
                for (let i = 0; i < historicData.length; i++) {
                    let k = 0;
                    if (historicData[i].day === moment(date).format("DD/MM/YYYY")) {
                        for (let j = 0; j < historicData[i].habits.length; j++) {
                            if (historicData[i].habits[j].done === true) {
                                k++;
                            }
                        }
                    }
                }
            }}/>
            </BoxCalendar>
            <ParticlesJss/>
        </MainHisto>
    );
};