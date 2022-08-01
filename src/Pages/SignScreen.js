import styled from "styled-components"
import Sign from "../components/Sign/Sign";
import React from 'react'
export default function SignScreen(){
    
    return(
        <Container>
            <Sign />
        </Container>
    )
}

export const Container = styled.aside`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: rgb(82,182,255);
    background: -moz-radial-gradient(circle, rgba(82,182,255,1) 0%, rgba(252,254,255,1) 98%, rgba(255,255,255,1) 99%, rgba(82,182,255,1) 100%);
    background: -webkit-radial-gradient(circle, rgba(82,182,255,1) 0%, rgba(252,254,255,1) 98%, rgba(255,255,255,1) 99%, rgba(82,182,255,1) 100%);
    background: radial-gradient(circle, rgba(82,182,255,1) 0%, rgba(252,254,255,1) 98%, rgba(255,255,255,1) 99%, rgba(82,182,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#52b6ff",endColorstr="#52b6ff",GradientType=1);
`;