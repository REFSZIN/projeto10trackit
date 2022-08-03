import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ResetCSS from './assets/css/global.js';
import UserContext from "./UserContext";
import SignScreen from "./Pages/SignScreen.js";
import RegisterScreen from "./Pages/RegisterScreen.js";
import HabitScreen from "./Pages/HabitScreen.js";
import TodayScreen from "./Pages/TodayScreen.js";
import HistoryScreen from "./Pages/HistoryScreen.js";
import { UserProvider } from './UserContext.js';

export default function App (){
return (
    <UserContext.Provider value={UserContext}>
        <UserProvider>
            <BrowserRouter>
            <ResetCSS/>
                <Routes>
                    <Route path="/" element={<SignScreen />}/>
                    <Route path="/cadastro" element={<RegisterScreen />}/>
                    <Route path="/habitos" element={<HabitScreen/>}/>
                    <Route path="/hoje" element={<TodayScreen/>}/>
                    <Route path="/historico" element={<HistoryScreen />}/>
                </Routes> 
            </BrowserRouter>
        </UserProvider>
    </UserContext.Provider>
    );
};