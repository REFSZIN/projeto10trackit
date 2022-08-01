
import styled from "styled-components"
import  { ThreeDots } from  'react-loader-spinner'
import React from 'react'

export default function Loader(){
    return(
<>
                <ThreeDots 
                color="#90BFFF"
                height={40} 
                width={90}
                margin={40}
                /></>
        );
    };

export const BoxLoader  = styled.section`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    animation: flipInX 1s;
`;
export const Aviso  = styled.h2`
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-top: 20px;
    margin-bottom: 20px;
`;
export const Conteiner  = styled.h2`
    width: 100%;
    height: 100%;
    background-color: #E5E5E5;
    padding-top: 70px;
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;