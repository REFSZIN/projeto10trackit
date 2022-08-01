import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from './assets/css/global.js';
import DailyProgress from "./contexts/DailyProgress";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import SignScreen from "./Pages/SignScreen.js";
import RegisterScreen from "./Pages/RegisterScreen.js";
import HabitScreen from "./Pages/HabitScreen.js";
import TodayScreen from "./Pages/TodayScreen.js";
import HistoryScreen from "./Pages/HistoryScreen.js";
import React from 'react'

export default function App (){

    const [token, setToken] = useState(0);
    const [user, setUser] = useState();
    const [dailyProgress, setDailyProgress] = useState(0);
    const [habitData,setHabitData] = useState('');
    const userContext = { user, setUser, token, setToken, habitData, setHabitData };
    const weekDays = new Map([
        [1,"Segunda"], [2,"Terça"], [3,"Quarta"], [4,"Quinta"],
        [5,"Sexta"], [6,"Sábado"], [0,"Domingo"]
    ]);

    return (
    <DailyProgress.Provider value={{dailyProgress, setDailyProgress}}>
        <UserContext.Provider value={userContext}>
            <BrowserRouter>
                <ResetCSS/>
                    <Routes>
                            <Route path="/" element={<SignScreen />}/>
                            <Route path="/cadastro" element={<RegisterScreen />}/>
                            <Route path="/habitos" element={<HabitScreen weekDays={weekDays} />}/>
                            <Route path="/hoje" element={<TodayScreen weekDays={weekDays} />}/>
                            <Route path="/historico" element={<HistoryScreen />}/>
                    </Routes> 
            </BrowserRouter>
        </UserContext.Provider>
    </DailyProgress.Provider>
    );
};