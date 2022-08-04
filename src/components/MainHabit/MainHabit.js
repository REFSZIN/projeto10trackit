import "./style.js";
import UserContext from "../../UserContext";
import { useContext, useState, useEffect } from "react";
import Loader from "../Loader/Loader.js";
import React from 'react'
import {ArticleDaysTitle,MainHab,BtnCreateExit,ArticleDays,TopMainHabit,H2,BoxIcon,CreateHabit,InputCreateHabit,DivDays,DaysCreateHabit,BoxBtn,BtnCreate,BoxHabit,BoxTitleHabit,
        TitleHabit,DaysHabit, BoxAvisoHabit,Aviso} from "./style.js";
export default function MainHabit(){
    const {ParticlesJs,localmenteLogado,postHabits,deleteHabits,nameHabit,setNameHabit,daysHabit,setDaysHabit,setLoad,load,habitData,data,getHabits,setColor,color} = useContext(UserContext);
    const [click, setClike] = useState(false);
    useEffect(() => {
        localmenteLogado();
        setLoad(0);
        getHabits();
    }, []);
    function createHabit(event) {
        event.preventDefault();
        if (daysHabit.length === 0) {
            alert("Você deve selecionar pelo menos um dia!");
            return;
        }
        setLoad(1);
        postHabits();
        setNameHabit('');
        setDaysHabit([]);
    }
    function checkDay(day) {
        if (!daysHabit.includes(day)) {
            setDaysHabit([...daysHabit, day])} 
        else{
            const aux = [...daysHabit];
            aux.splice(aux.indexOf(day), 1);
            setDaysHabit([...aux]);
        }
        const aux = [...color];
        aux[day] = !aux[day]
        setColor([...aux]);
    }
    return(
        <MainHab>
            <TopMainHabit>
                <H2>Meus hábitos</H2>
                <BoxIcon onClick={() => setClike(true)}>
                    <ion-icon name="add-outline"></ion-icon>
                </BoxIcon>
                {click  
                ?         
                <CreateHabit onSubmit={createHabit}>
                    <InputCreateHabit placeholder="Nome do hábito" value={nameHabit} disabled={load} onChange={e => setNameHabit(e.target.value)} required></InputCreateHabit>
                    <ArticleDaysTitle>
                        <DivDays  value={daysHabit}  disabled={load} onClick={ (e) => checkDay(0)} >
                            <DaysCreateHabit>D</DaysCreateHabit>
                        </DivDays>
                        <DivDays value={daysHabit}  disabled={load} onClick={ (e) => checkDay(1)} >
                            <DaysHabit>S</DaysHabit>
                        </DivDays>
                        <DivDays  value={daysHabit}  disabled={load} onClick={ (e) => checkDay(2)} >
                            <DaysCreateHabit>T</DaysCreateHabit>
                        </DivDays>
                        <DivDays value={daysHabit}  disabled={load} onClick={ (e) => checkDay(3)} >
                            <DaysHabit>Q</DaysHabit>
                        </DivDays>
                        <DivDays value={daysHabit}  disabled={load} onClick={ (e) => checkDay(4)} >
                            <DaysCreateHabit>Q</DaysCreateHabit>
                        </DivDays>
                        <DivDays  value={daysHabit}  disabled={load} onClick={ (e) => checkDay(5)} >
                            <DaysHabit>S</DaysHabit>
                        </DivDays>
                        <DivDays value={daysHabit}  disabled={load} onClick={ (e) => checkDay(6)} >
                            <DaysCreateHabit>S</DaysCreateHabit>
                        </DivDays>
                    </ArticleDaysTitle>
                    <BoxBtn>
                        <BtnCreateExit onClick={() => setClike(false)}>Cancelar</BtnCreateExit>
                        <BtnCreate disabled={load} type="submit">{ load ? <Loader/> :`Salvar`}</BtnCreate>
                    </BoxBtn>
                </CreateHabit>:<></>}
            </TopMainHabit>
            {habitData.length !== 0
                        ? habitData.map((habit,index) =>
                        <BoxHabit key={index}>
                        <BoxTitleHabit>
                            <TitleHabit>{habit.name}</TitleHabit>
                            <ion-icon name="trash-outline" id={habit.id} onClick={e => deleteHabits(e.target.id, data.token)}></ion-icon>
                        </BoxTitleHabit>
                            <ArticleDays>   
                                <DivDays boxColor={habit.days.includes(0)}>
                                    <DaysHabit>D</DaysHabit>
                                </DivDays>
                                <DivDays boxColor={habit.days.includes(1)}>
                                    <DaysHabit>S</DaysHabit>
                                </DivDays>
                                <DivDays boxColor={habit.days.includes(2)}>
                                    <DaysHabit>T</DaysHabit>
                                </DivDays>
                                <DivDays boxColor={habit.days.includes(3)}>
                                    <DaysHabit>Q</DaysHabit>
                                </DivDays>
                                <DivDays boxColor={habit.days.includes(4)}>
                                    <DaysHabit>Q</DaysHabit>
                                </DivDays>
                                <DivDays boxColor={habit.days.includes(5)}>
                                    <DaysHabit>S</DaysHabit>
                                </DivDays>
                                <DivDays boxColor={habit.days.includes(6)}>
                                    <DaysHabit>S</DaysHabit>
                                </DivDays>
                            </ArticleDays>
                        </BoxHabit> )
                        : ''}
            <BoxAvisoHabit>
                {habitData.length === 0 ?<Aviso>Você não tem nenhum hábito cadastrado ainda.<br/> Adicione um hábito para começar a trackear!</Aviso> : <></>}
            </BoxAvisoHabit>
            <ParticlesJs/>
        </MainHab>
    );
};