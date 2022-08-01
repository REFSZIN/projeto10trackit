import styled from 'styled-components';

export const Foter = styled.footer`
    position: fixed;
    width: 100%;
    display: flex;
    height: 70px;
    left: 0px;
    bottom: 0px;
    background: #FFFFFF;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    box-shadow: 1px 1px 1px 1px #126BA5;
    z-index: 1;
`;
export const LinkFoter = styled.h4`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
        &:hover{
	cursor: pointer;
    filter: brightness(1.1);
    }
`
export const Mid = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 99%;
    background: #52B6FF;
    margin-bottom: 40px;
    border: 6px solid  #E5E5E5;
    box-shadow: 0px -1px 0 0 #E5E5E5;
    transition: 0.5s;
`
