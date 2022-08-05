import "./style.js";
import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/pt-br'
import React, { useEffect } from 'react'
import {MainToda,TopToda,Day,DescDay,DescDayOn,Habit,TitleHabit,ScoreHabit,BoxUnCheck,BoxChecked,DescqDay,NumberDay,ScoreHabitVerde} from "./style.js";
import UserContext from "../../UserContext";
import { useContext } from "react";
export default function MainToday(){
    dayjs.extend(isLeapYear)
    dayjs.locale('pt-br')
    const {ParticlesJss,localmenteLogado,getToday,today,postUnCheck,postCheck,percentage,setPercentage} = useContext(UserContext);
    useEffect(() => {
        localmenteLogado();
        getToday();
    }, []);
    let j = 0;
    for (let i = 0; i < today.length; i++) {
        if (today[i].done === true) {
            j++;
    }}
    let k = 0;
    for (let i = 0; i < today.length; i++) {
        if (today[i].done === true) {
            k++;
        }
    setPercentage((100 * (k / today.length)));
}
    return(
        <MainToda>
            <TopToda>
                <Day>{dayjs().format('dddd')}
                    <NumberDay>, {dayjs().format('DD/MM')}</NumberDay> 
                </Day>
                {today.length === 0?<DescDay>Nenhum hábito concluído ainda</DescDay>:<DescDay><DescqDay>{today.length - j}</DescqDay> hábitos para concluír</DescDay>}
                <DescDayOn>{percentage.toFixed(0)} % dos hábitos concluídos</DescDayOn>
            </TopToda>  
            {today.length > 0 ? today.map((habitToday,index) =>
                        <Habit key={index}>
                        <TitleHabit>{habitToday.name}</TitleHabit>
                        {habitToday.currentSequence === habitToday.highestSequence && habitToday.currentSequence > 0 ?
                        <ScoreHabitVerde>Sequência atual: {habitToday.currentSequence} dias<br/> Seu recorde: {habitToday.highestSequence} dias </ScoreHabitVerde>
                        :<ScoreHabit>Sequência atual: {habitToday.currentSequence} dias<br/> Seu recorde: {habitToday.highestSequence} dias </ScoreHabit>}
                        {habitToday.done 
                        ?<BoxUnCheck key={index} onClick={() => postUnCheck(habitToday.id)}>
                            <ion-icon name="checkmark-outline"></ion-icon>
                        </BoxUnCheck>
                        : <BoxChecked key={index} onClick={() => postCheck(habitToday.id)}>
                            <ion-icon name="checkmark-outline"></ion-icon>
                        </BoxChecked>}
                    </Habit>).reverse()
                        : ''}
            <ParticlesJss/>
        </MainToda>
    );
};