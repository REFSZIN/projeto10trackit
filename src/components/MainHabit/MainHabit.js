import "./style.js";
import UserContext from "../../UserContext";
import { useContext,useEffect, useState } from "react";
import Loader from "../Loader/Loader.js";
import React from 'react'
import {ArticleDaysTitle,MainHab,BtnCreateExit,ArticleDays,TopMainHabit,H2,BoxIcon,CreateHabit,InputCreateHabit,DivDays,DaysCreateHabit,BoxBtn,BtnCreate,BoxHabit,BoxTitleHabit,TitleHabit,DaysHabit, BoxAvisoHabit,Aviso} from "./style.js";

export default function MainHabit(){
    const {ParticlesJs,localmenteLogado,postHabits,deleteHabits,nameHabit,setNameHabit,daysHabit,setDaysHabit,setLoad,load,habitData,getHabits,click,setClike} = useContext(UserContext);
    const [click1, setClike1] = useState(false);
    const [click2, setClike2] = useState(false);
    const [click3, setClike3] = useState(false);
    const [click4, setClike4] = useState(false);
    const [click5, setClike5] = useState(false);
    const [click6, setClike6] = useState(false);
    const [click7, setClike7] = useState(false);
    const clicks = [click1,click2,click3,click4,click5,click6,click7]
    const setClicks = [setClike1,setClike2,setClike3,setClike4,setClike5,setClike6,setClike7]
    const dias = ["D","S","T","Q","Q","S","S"];
    useEffect(() => {
        setLoad(0);
        getHabits();
        setClike(false)
    }, []);

    function createHabit(event) {
        event.preventDefault();
        if (daysHabit.length === 0) {
            alert("Você tem que selecionar pelo menos um dia!💤💤");
            return;
        }
        setLoad(1);
        postHabits();
        setNameHabit('');
        setDaysHabit([]);
        setClike(false);
        setClike1(false);
        setClike2(false);
        setClike3(false);
        setClike4(false);
        setClike5(false);
        setClike6(false);
        setClike7(false);
    }
    const setCancel = () => {
        setClike(false);
        setClike1(false);
        setClike2(false);
        setClike3(false);
        setClike4(false);
        setClike5(false);
        setClike6(false);
        setClike7(false);
    }
    function checkDay(day) {
        if (!daysHabit.includes(day)) {
            setDaysHabit([...daysHabit, day])} 
        else{
            const aux = [...daysHabit];
            aux.splice(aux.indexOf(day), 1);
            setDaysHabit([...aux]);
        }
    }
    const deleteHabit = (props) =>{
        let result = window.confirm('Are you sure you want to delete?');
        let message = result ?"DELETED":'UNDELETE';
        alert(message);
        if(message === "DELETED"){
            deleteHabits(props)
        }
    };
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
                        {
                        dias.map((dia, i) => {
                            return(
                            <DivDays key={i} value={daysHabit}  disabled={load} onClick={ (e) => checkDay(i)} >
                                {clicks[i]
                                    ? <DaysHabit key={i} onClick={ () => setClicks[i](false)}>{dia}</DaysHabit>
                                    : <DaysCreateHabit key={i} onClick={ () => setClicks[i](true)}>{dia}</DaysCreateHabit>
                                }
                            </DivDays>)})
                        }
                    </ArticleDaysTitle>
                    <BoxBtn>
                        <BtnCreateExit onClick={() => setCancel()}>Cancelar</BtnCreateExit>
                        <BtnCreate disabled={load} type="submit">{ load ? <Loader/> :`Salvar`}</BtnCreate>
                    </BoxBtn>
                </CreateHabit>:<></>}
            </TopMainHabit>
            {habitData.length !== 0
                        ? habitData.map((habit,i) =>
                        <BoxHabit key={i}>
                        <BoxTitleHabit>
                            <TitleHabit>{habit.name}</TitleHabit>
                            <ion-icon name="trash-outline" id={habit.id} onClick={() => deleteHabit(habit.id)}></ion-icon>
                        </BoxTitleHabit>
                            <ArticleDays>
                                {
                                    dias.map((dia, i) => {
                                        const found = habit.days.find((day) => i === day);
                                        return (found === i )
                                        ? (<DivDays key={i}><DaysHabit key={i}>{dia}</DaysHabit></DivDays>)
                                        : (<DivDays key={i}><DaysCreateHabit key={i}>{dia}</DaysCreateHabit></DivDays>)
                                        })
                                    }
                            </ArticleDays>
                        </BoxHabit> ).reverse()
                        : ''}
            <BoxAvisoHabit>
                {habitData.length === 0 ?<Aviso>Você não tem nenhum hábito cadastrado ainda.<br/> Adicione um hábito para começar a trackear!</Aviso> : <></>}
            </BoxAvisoHabit>
            <ParticlesJs/>
        </MainHab>
    );
};
