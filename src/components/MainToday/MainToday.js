import "./style.js";
import React from 'react'
import { MainToda, TopToda, Day, DescDay, DescDayOn, Habit, TitleHabit, ScoreHabit ,BoxCheck } from "./style.js";

export default function MainToday(){
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
                <BoxCheck>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </BoxCheck>
            </Habit>
        </MainToda>
    );
};