import "./style.js";
import { Foter, LinkFoter, Mid } from "./style.js";
import { Link } from "react-router-dom";
import React from 'react'
import {CircularProgressbar,buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Footer(){
    
    const percentage = 92;
    return(
            <Foter>
                <Link to="/habitos"><LinkFoter>Hábitos</LinkFoter></Link>
                <Mid>
                <Link to="/hoje">
                    <CircularProgressbar
                        value={percentage}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#ffffff",
                        pathColor: "#ffffff",
                        trailColor: "transparent"
                        })}
                    />
                    </Link>
                </Mid>
                <Link to="/historico"><LinkFoter>Histórico</LinkFoter></Link>
            </Foter>
    );
};