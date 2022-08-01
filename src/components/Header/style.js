import styled from 'styled-components';

export const Head = styled.header`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    display: flex;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: stretch;
    padding-left: 5%;
    z-index: 1;
`;

export const LogoHeader = styled.img`
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    padding-top: 10px;
`;

export const UserImg = styled.img`
    width: 51px;
    height: 51px;
    background: url(image.png);
    border-radius: 98.5px;
    margin-left: 10px;
`;
export const UserName = styled.figcaption`
    margin-top: 15px;
    width: fit-content;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #FFFFFF;
`;
export const BoxUser = styled.figure`
    display: flex;
    margin-right: 5%;
`;