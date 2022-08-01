import "./style.js";
import { MainHisto,  TitleHisto, BoxCalendar } from "./style.js";
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MainHabit(){
    return(
        <MainHisto>
            <TitleHisto>Histórico</TitleHisto>
            <BoxCalendar>
                <Calendar />
            </BoxCalendar>
        </MainHisto>
    );
};