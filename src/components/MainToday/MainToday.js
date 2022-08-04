import "./style.js";
import React, { useState } from 'react'
import {MainToda,TopToda,Day,DescDay,DescDayOn,Habit,TitleHabit,ScoreHabit,BoxCheck,BoxChecked} from "./style.js";
import UserContext from "../../UserContext";
import { useContext } from "react";
import axios from "axios";
export default function MainToday(){
    const {ParticlesJss, data ,setToken,setImage,setName,setData,setLoad} = useContext(UserContext);
    const [check, setCheck] = useState(false)
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
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
            setLoad(0);
        });}
    }
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