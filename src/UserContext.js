import { createContext } from "react";
import React, {useState} from "react";
import axios from "axios";
import { Particles } from "@blackbox-vision/react-particles";
const UserContext = createContext();
export default UserContext;

export function UserProvider (props){
    const [token, setToken] = useState(null);
    const [data, setData] = useState(JSON.parse(localStorage.getItem("User")));
    const [habitData,setHabitData] = useState([]);
    const [today,setToday] = useState([]);
    const [historicData, setHistoricData] = useState([]);
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const [user,setUser] = useState('');
    const [percentage,setPercentage] = useState(0);
    const [password,setPassword] = useState('');
    const [load,setLoad] = useState(false);
    const URL =`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit` 

const postSign = async () => {
    const params = 
    {
        email: email,
        password: password
    }
    try {
        const req = axios.post(`${URL}/auth/login/`, params);
        req.then(res => {
            console.log(res.data)
            setToken(res.data.token)
            setImage(res.data.image);   
            setName(res.data.name);   
            setLoad(0);
            setData(res.data)
            localStorage.setItem("User",JSON.stringify(res.data))
        })
        req.catch(err => {
            alert(err.response.data.message);
            setLoad(0);
        });
    } 
    catch (error) {
        throw new Error(error);
    }
}
    const postSignUp = async () => {
    const params = {
        email: email,
        name: name,
        image: image,
        password: password
    }
    console.log(params)
    try {
        const req = axios.post(`${URL}/auth/sign-up/`, params);
        req.then(res => {
            return res;
        })
        .catch(err => {
            alert(err.response.user);
        });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const postHabits = () => {
    const auth = localStorage.getItem("trackit");
    const params = {
        name: "Nome do hábito",
        days: [1, 3, 5]
    }
    const headers = {
        headers: { Authorization: `Bearer ${auth.token}`}
    }
    try {
        const req = axios.post(`${URL}/habits`, {params}, {headers});
        req.then(res => {
            return res;
        })
        .catch(err => {
            alert(err.response.user.message);
        });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const getHabits = () => {
    const auth = localStorage.getItem("trackit");
    const params = {
        // props
        // O servidor responderá com uma array no formato
        // [
        // 	{
        // 		id: 1,
        // 		name: "Nome do hábito",
        // 		days: [1, 3, 5]
        // 	},
        // 	{
        // 		id: 2,
        // 		name: "Nome do hábito 2",
        // 		days: [1, 3, 4, 6]
        // 	}
        // }
    }
    const headers = {
        headers: { Authorization: `Bearer ${auth.token}`}
    }
    try {
        const req = axios.get(`${URL}/habits`, {params}, {headers});
        req.then(res => {
            return res;
        })
        .catch(err => {
            alert(err.response.user.message);
        });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const deleteHabits = () => {
    const auth = localStorage.getItem("trackit");
    const params = {
        // props /habits/ID_DO_HABITO DELETE
        // O servidor responderá com uma array no formato
        // [
        // 	{
        // 		id: 1,
        // 		name: "Nome do hábito",
        // 		days: [1, 3, 5]
        // 	},
        // 	{
        // 		id: 2,
        // 		name: "Nome do hábito 2",
        // 		days: [1, 3, 4, 6]
        // 	}
        // }
    }
    
    const headers = {
        headers: { Authorization: `Bearer ${auth.token}`}
    }
    try {
        const req = axios.post(`${URL}/login`, {params}, {headers});
        req.then(res => {
            return res;
        })
            .catch(err => {
                alert(err.response.user.message);
            });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const getToday = () => {
    const auth = localStorage.getItem("trackit");
    const params = {
        // props /habits/today GET  Buscar hábitos de hoje
        // [
        //     {
        //         "id": 3,
        //         "name": "Acordar",
        //         "done": true,
        //         "currentSequence": 1,
        //         "highestSequence": 1
        //     }
        // ]
    }
    const headers = {
        headers: { Authorization: `Bearer ${auth.token}`}
    }
    try {
        const req = axios.post(`${URL}/login`, {params}, {headers});
        req.then(res => {
            console.log(res);
            return res;
        })
            .catch(err => {
                alert(err.response.user.message);
            });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const postCheck = () => {
    const auth = localStorage.getItem("trackit");
    const params = {
        // props /habits/ID_DO_HABITO/check Marcar hábito como feito POST  
        //         Se:
        // - O hábito já estiver marcado
        // - O hábito não for do dia atual
        // - O hábito não for do usuário logado
        // o servidor vai responder com `Bad Request (400)`.
    }
    const headers = {
        headers: { Authorization: `Bearer ${auth.token}`}
    }
    try {
        const req = axios.post(`${URL}/login`, {params}, {headers});
        req.then(res => {
            console.log(res);
            return res;
        })
            .catch(err => {
                alert(err.response.user.message);
            });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const postUnCheck = () => {
    const auth = localStorage.getItem("trackit");
    const params = {
        // props /habits/ID_DO_HABITO/uncheck Marcar hábito como feito POST
        //         Se:
        // - O hábito não estiver marcado
        // - O hábito não for do dia atual
        // - O hábito não for do usuário logado
        // o servidor vai responder com `Bad Request (400)`.
    }
    const headers = {
        headers: { Authorization: `Bearer ${auth.token}`}
    }
    try {
        const req = axios.post(`${URL}/login`, {params}, {headers});
        req.then(res => {
            console.log(res);
            return res;
        })
            .catch(err => {
                alert(err.response.user.message);
            });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const getHistory = () => {
    const auth = localStorage.getItem("trackit");
    const params = {
        //  GET Histórico de hábitos diário /habits/history/daily
        // O servidor responderá com um array no formato
        // [
        //     {
        //         "day": "20/05/2021",
        //         "habits": [
        //             {
        //                 "id": 3,
        //                 "name": "Acordar",
        //                 "date": "2021-05-20T12:00:00.000Z",
        //                 "weekDay": 4,
        //                 "historyId": null,
        //                 "done": false
        //             }
        //         ]
        //     },
        // ]   
    }
    const headers = {
        headers: { Authorization: `Bearer ${auth.token}`}
    }
    try {
        const req = axios.post(`${URL}/login`, {params}, {headers});
        req.then(res => {
            return res;
        })
            .catch(err => {
                alert(err.response.user.message);
            });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const ParticlesJs = () => (
<Particles
    id="simple"
    width="auto"
    height="100vh"
    style={{
    backgroundColor: 'Gray90',
    }}
    params={{
    particles: {
        number: {
        value: 100,
        },
        size: {
        value: 5,
        },
        color: {
            value: "#52B6FF"
        },
    },
    interactivity: {
        events: {
        onhover: {
            enable: true,
            mode: 'repulse',
        },
        },
    },
    }}
/>
)
const ParticlesJss = () => (
    <Particles
        id="simple2"
        width="auto"
        height="100vh"
        style={{
        backgroundColor: 'Gray90',
        }}
        params={{
        particles: {
            number: {
            value: 100,
            },
            size: {
            value: 5,
            },
            color: {
                value: "#52B6FF"
            },
        },
        interactivity: {
            events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            },
        },
        }}
    />
    )
    return (
        <UserContext.Provider 
            value={{
                postCheck,postUnCheck,setToday,
                getHistory,getToday,setHistoricData,
                postHabits,getHabits,historicData,
                postSignUp,postSign,deleteHabits,
                ParticlesJs,ParticlesJss,setUser,
                setPercentage,percentage,user,
                email,setEmail,token,name,
                setName,setToken,image,setImage,
                password,setPassword,data,setData,
                habitData,setHabitData,today,load,setLoad
            }}>
            {props.children}
        </UserContext.Provider>
    )}