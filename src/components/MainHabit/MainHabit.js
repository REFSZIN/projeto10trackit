import "./style.js";
import UserContext from "../../UserContext";
import { useContext, useState,useEffect } from "react";
import React from 'react'
import {MainHab,BtnCreateExit,ArticleDays,TopMainHabit,H2,BoxIcon,CreateHabit,InputCreateHabit,DivDays,DaysCreateHabit,BoxBtn,BtnCreate,BoxHabit,BoxTitleHabit,
        TitleHabit,DaysHabit, BoxAvisoHabit,Aviso} from "./style.js";
import  axios  from "axios";
export default function MainHabit(){
    const {ParticlesJs,data,setToken,setImage,setName,setData,setLoad} = useContext(UserContext);
    const [click, setClike] = useState();
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        useEffect(() => {
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
            });}}, [])
        }
    return(
        <MainHab>
            <TopMainHabit>
                <H2>Meus hábitos</H2>
                <BoxIcon>
                    <ion-icon name="add-outline" onClick={() => setClike(!click)}></ion-icon>
                </BoxIcon>
                {click  
                ?         
                <CreateHabit>
                    <InputCreateHabit placeholder="Nome do hábito"></InputCreateHabit>
                    <ArticleDays>
                        <DivDays>
                            <DaysCreateHabit>D</DaysCreateHabit>
                        </DivDays>
                        <DivDays>
                            <DaysCreateHabit>S</DaysCreateHabit>
                        </DivDays>
                        <DivDays>
                            <DaysCreateHabit>T</DaysCreateHabit>
                        </DivDays>
                        <DivDays>
                            <DaysCreateHabit>Q</DaysCreateHabit>
                        </DivDays>
                        <DivDays>
                            <DaysCreateHabit>Q</DaysCreateHabit>
                        </DivDays>
                        <DivDays>
                            <DaysCreateHabit>S</DaysCreateHabit>
                        </DivDays>
                        <DivDays>
                            <DaysCreateHabit>S</DaysCreateHabit>
                        </DivDays>
                    </ArticleDays>
                    <BoxBtn>
                        <BtnCreateExit>Cancelar</BtnCreateExit>
                        <BtnCreate>Salvar</BtnCreate>
                    </BoxBtn>
                </CreateHabit>:<></>}
            </TopMainHabit>
            {click?
                <BoxHabit>
                <BoxTitleHabit>
                    <TitleHabit>Ler 1 capítulo de livro</TitleHabit>
                    <ion-icon name="trash-outline"></ion-icon>
                </BoxTitleHabit>
                    <ArticleDays>
                        <DivDays>
                            <DaysHabit>D</DaysHabit>
                        </DivDays>
                        <DivDays>
                            <DaysHabit>S</DaysHabit>
                        </DivDays>
                        <DivDays>
                            <DaysHabit>T</DaysHabit>
                        </DivDays>
                        <DivDays>
                            <DaysHabit>Q</DaysHabit>
                        </DivDays>
                        <DivDays>
                            <DaysHabit>Q</DaysHabit>
                        </DivDays>
                        <DivDays>
                            <DaysHabit>S</DaysHabit>
                        </DivDays>
                        <DivDays>
                            <DaysHabit>S</DaysHabit>
                        </DivDays>
                    </ArticleDays>
                </BoxHabit>:<></>}
            <BoxAvisoHabit>
                {!click ?<Aviso>Você não tem nenhum hábito cadastrado ainda.<br/> Adicione um hábito para começar a trackear!</Aviso> : <></>}
            </BoxAvisoHabit>
            <ParticlesJs/>
        </MainHab>
    );
};