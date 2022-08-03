import "./style.js";
import React, { useState } from 'react'
import {  MainToda, TopToda, Day, DescDay, DescDayOn, Habit, TitleHabit, ScoreHabit ,BoxCheck,BoxChecked } from "./style.js";
import UserContext from "../../UserContext";
import { useContext } from "react";

export default function MainToday(){
    const {ParticlesJss} = useContext(UserContext);
    const [check, setCheck] = useState(false)
    return(
        <MainToda>
            <TopToda>
                <Day>Segunda, 17/05</Day>
                <DescDay>Nenhum hábito concluído ainda</DescDay>
                <DescDayOn>67% dos hábitos concluídos</DescDayOn>
            </TopToda>
            <Habit>
                <TitleHabit>Ler 1 capítulo de livro</TitleHabit>
                <ScoreHabit>Sequência atual: 4 dias<br/> Seu recorde: 5 dias</ScoreHabit>
                {!check ?
                <BoxChecked onClick={() => setCheck(true)}>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </BoxChecked>:
                <BoxCheck onClick={() => setCheck(false)} >
                    <ion-icon name="checkmark-outline"></ion-icon>
                </BoxCheck>}
            </Habit>
            <Habit>
                <TitleHabit>Ler 1 capítulo de livro</TitleHabit>
                <ScoreHabit>Sequência atual: 4 dias<br/> Seu recorde: 5 dias</ScoreHabit>
                {!check ?
                <BoxChecked onClick={() => setCheck(true)}>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </BoxChecked>:
                <BoxCheck onClick={() => setCheck(false)} >
                    <ion-icon name="checkmark-outline"></ion-icon>
                </BoxCheck>}
            </Habit>
            <Habit>
                <TitleHabit>Ler 1 capítulo de livro</TitleHabit>
                <ScoreHabit>Sequência atual: 4 dias<br/> Seu recorde: 5 dias</ScoreHabit>
                {!check ?
                <BoxChecked onClick={() => setCheck(true)}>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </BoxChecked>:
                <BoxCheck onClick={() => setCheck(false)} >
                    <ion-icon name="checkmark-outline"></ion-icon>
                </BoxCheck>}
            </Habit>
            <Habit>
                <TitleHabit>Ler 1 capítulo de livro</TitleHabit>
                <ScoreHabit>Sequência atual: 4 dias<br/> Seu recorde: 5 dias</ScoreHabit>
                {!check ?
                <BoxChecked onClick={() => setCheck(true)}>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </BoxChecked>:
                <BoxCheck onClick={() => setCheck(false)} >
                    <ion-icon name="checkmark-outline"></ion-icon>
                </BoxCheck>}
            </Habit>
            <ParticlesJss/>
        </MainToda>
    );
};