import "./style.js";
import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/pt-br'
import React, { useEffect } from 'react'
import {MainToda,TopToda,Day,DescDay,DescDayOn,Habit,TitleHabit,ScoreHabit,BoxCheck,BoxChecked} from "./style.js";
import UserContext from "../../UserContext";
import { useContext } from "react";
export default function MainToday(){
    dayjs.extend(isLeapYear)
    dayjs.locale('pt-br')
    const {ParticlesJss,localmenteLogado,getToday,today} = useContext(UserContext);
    useEffect(() => {
        localmenteLogado();
        getToday();
    }, []);
    console.log(today) 
    return(
        <MainToda>
            <TopToda>
                <Day>Segunda, 17/05</Day>
                <DescDay>Nenhum hábito concluído ainda</DescDay>
                <DescDayOn>67% dos hábitos concluídos</DescDayOn>
            </TopToda>
            {today.length !== 0
                        ? today.map((habitToday,index) =>
                        <Habit key={index}>
                        <TitleHabit>{habitToday.name}</TitleHabit>
                        <ScoreHabit>Sequência atual: {habitToday.currentSequence} dias<br/> Seu recorde: {habitToday.highestSequence} dias </ScoreHabit>
                        {!habitToday.done ?
                        <BoxChecked>
                            <ion-icon name="checkmark-outline"></ion-icon>
                        </BoxChecked>:
                        <BoxCheck >
                            <ion-icon name="checkmark-outline"></ion-icon>
                        </BoxCheck>}
                    </Habit>)
                        : ''}
            <ParticlesJss/>
        </MainToda>
    );
};