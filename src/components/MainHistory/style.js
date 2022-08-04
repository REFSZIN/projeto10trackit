import styled from 'styled-components';
export const MainHisto  = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #E5E5E5;
    padding-top: 70px;
    padding-bottom: 70px;
    padding-left: 5%;
    padding-right: 5%;
    z-index: 1;
    position: absolute;
    top: 0px;
    right: 0px;
`;
export const TitleHisto  = styled.h2`
    width: 100px;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
`;
export const BoxAviso =styled.article`
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    height: 80px;
`
export const Aviso  = styled.span`
    height: 74px;
    padding-right: 5%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`;
export const BoxCalendar = styled.section`
    margin-top: 70px;
    width: 100%;
    height: fill;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    animation: backInUp 1s;
    @media only screen and (max-width: 1200px) {
    width: 95%;
    margin-left: 3%;
    }
    @media only screen and (max-width: 770px) {
    width: 90%;
    margin-left: 5%;
    margin-top: 20px;
    }
    @media only screen and (max-width: 370px) {
    width: 99%;
    margin-left: 0.1%;
    margin-right: 0.1%;
}
`