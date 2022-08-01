import styled from 'styled-components';

export const MainHab = styled.main`
    width: 100%;
    height: 100%;
    background-color: #E5E5E5;
    padding-top: 70px;
    padding-bottom: 70px;
`;
export const TopMainHabit  = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 5%;
    margin-top: 20px;
    padding-right: 5%;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
`;
export const H2  = styled.h2`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 500;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    animation: fadeInDown 1s ;
`;
export const BoxIcon  = styled.div`
    width: 40px;
    display: flex;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    align-content: center;
    justify-content: center;
    align-items: center;
    animation: fadeInDown 1s ;
`;
export const CreateHabit = styled.article`
    width: 90%;
    display: flex;
    margin-left: 5%;
    margin-right: 5%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    align-items: flex-start;
    justify-content: center;
    height: 160px;
    background: #FFFFFF;
    border-radius: 5px;
    animation: fadeInRight 1s ;
`;
export const InputCreateHabit = styled.input`
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    height: 45px;
    left: 36px;
    top: 165px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    padding-left: 10px;
    &::placeholder{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    }
    @media only screen and (min-width: 770px) {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    }
`;
export const ArticleDays = styled.article`
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    margin-left: 5%;
    @media only screen and (min-width: 770px) {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    }
`
export const DivDays = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    left: 70px;
    top: 218px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    &:hover{
	cursor: pointer;
    filter: brightness(0.9);
    }
`;
export const DaysCreateHabit = styled.span`
    width: 12px;
    height: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
`;
export const BoxBtn  = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    width: 95%;
    height: 40px;
    margin-bottom: 10px;
    @media only screen and (min-width: 770px) {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    }
`;
export const BtnCreateExit  = styled.span`
    width: 80px;
    height: 20px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    border: none;
    background-color: #ffffff;
    text-align: center;
    color: #52B6FF;
    margin-right: 10px;
    margin-top: 30px;
    &:hover{
	cursor: pointer;
    filter: brightness(1.1);
    }
`;
export const BtnCreate  = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    margin-top: 30px;
    color: #FFFFFF;
`;
export const  BoxHabit = styled.article`
    width: 90%;
    height: 91px;
    left: 17px;
    top: 147px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: flex-start;
    animation: fadeInLeft 1s ;
`;
export const BoxTitleHabit  = styled.div`
    display: flex;
    margin-right: 5%;
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    margin-left: 5%;
    @media only screen and (min-width: 770px) {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    }
`;
export const TitleHabit  = styled.h2`
    width: 208px;
    height: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`;
export const  DaysHabit = styled.span`
    width: 30px;
    height: 30px;
    left: 70px;
    display: flex;
    top: 218px;
    background: #CFCFCF;
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #FFFFFF;
`;
export const  BoxAvisoHabit = styled.section`
    width: 90%;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    margin-left: 5%;
    margin-right: 5%;
    color: #666666;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
`;
export const Aviso = styled.span`
    position: absolute;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-right: 4%;
    margin-left: 4%;
`;