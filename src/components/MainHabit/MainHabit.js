import { MainHab,BtnCreateExit , ArticleDays, TopMainHabit,H2,BoxIcon,CreateHabit,InputCreateHabit,DivDays ,DaysCreateHabit,BoxBtn,BtnCreate,BoxHabit,BoxTitleHabit, TitleHabit ,DaysHabit, BoxAvisoHabit, Aviso } from "./style.js";
import "./style.js";

import React from 'react'
export default function MainHabit(){

    const renderCreate = () => {
        return(
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
                <BtnCreate onClick={renderHabit()}>Salvar</BtnCreate>
            </BoxBtn>
        </CreateHabit>
    )};
    
    const renderHabit = () => {
        return(
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
        </BoxHabit>)
    };

    return(
        <MainHab>
            <TopMainHabit>
                <H2>Meus hábitos</H2>
                <BoxIcon>
                    <ion-icon name="add-outline" onClick={renderCreate()}></ion-icon>
                </BoxIcon>
            </TopMainHabit>
            <BoxAvisoHabit>
                <Aviso>Você não tem nenhum hábito cadastrado ainda.<br/> Adicione um hábito para começar a trackear!</Aviso>
            </BoxAvisoHabit>
        </MainHab>
    );
};