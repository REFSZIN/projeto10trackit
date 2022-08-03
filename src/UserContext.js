import { createContext } from "react";
import React, {useState} from "react";
import axios from "axios";
import { Particles } from "@blackbox-vision/react-particles";
const UserContext = createContext();

export default UserContext;

export function UserProvider (props){
    const [token, setToken] = useState(null);
    const [data, setData] = useState(JSON.parse(localStorage.getItem("userinfo")));
    const [habitData,setHabitData] = useState({});
    const [todayHabit,setTodayHabit] = useState({});
    const [historicData, setHistoricData] = useState({});
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const [user,setUser] = useState('');
    const [percentage,setPercentage] = useState(0);
    const [password,setPassword] = useState('');
    const URL =`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/` 

// /auth/sign-up POST
// enviando um corpo no formato
// {
//     email: "...",
//     name: "...",
//     image: "...",
//     password: "..."
// }


///login  POST
//     enviando um corpo no formato
// {
// 	email: "...",
// 	password: "..."
// }
// O servidor responderá com um objeto no formato
// {
//     "id": 3,
//     "name": "Joe",
//     "image": "https://http.cat/411.jpg",
//     "email": "joe@respondeai.com.br",
//     "password": "123456",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjIxMjg0NzExfQ.b8e3bYm7TnU5p6pfrCPPbzboax6gvh_gGNFR4T51FxY"
// }


///habits POST CRIAR Bearer TOKEN
//     enviando um corpo no formato
// {
// 	name: "Nome do hábito",
// 	days: [1, 3, 5] // segunda, quarta e sexta
// }
// O servidor responderá com um objeto no formato
// {
// 	id: 1,
// 	name: "Nome do hábito",
// 	days: [1, 3, 5]
// /////////////////////////////////////

///habits GET LISTAR Bearer TOKEN
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



///habits/ID_DO_HABITO DELETE LISTAR Bearer TOKEN
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


// /habits/today GET  Buscar hábitos de hoje
// [
//     {
//         "id": 3,
//         "name": "Acordar",
//         "done": true,
//         "currentSequence": 1,
//         "highestSequence": 1
//     }
// ]


// /habits/ID_DO_HABITO/check Marcar hábito como feito POST  Bearer TOKEN
// O servidor responderá com um array no formato
// Se:
// - O hábito já estiver marcado
// - O hábito não for do dia atual
// - O hábito não for do usuário logado
// o servidor vai responder com `Bad Request (400)`.


// /habits/ID_DO_HABITO/uncheck Marcar hábito como feito POST Bearer TOKEN
// O servidor responderá com um array no formato
// Se:
// - O hábito não estiver marcado
// - O hábito não for do dia atual
// - O hábito não for do usuário logado
// o servidor vai responder com `Bad Request (400)`.

// GET Histórico de hábitos diário /habits/history/daily
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

    const searchButton = () => {
    const params = {
        // props
    }
    const headers = {
        headers: { Authorization: 'Bearer'}
    }
    try {
        const req = axios.post(URL, {params}, {headers});
        req.then(res => {
            
        })
            .catch(err => {
                console.log(err);
                alert('Insira uma pesquisa válida, por favor!');
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
            value={{searchButton,
                ParticlesJs,ParticlesJss,
                setUser,user,
                setPercentage,percentage,
                email,setEmail,token,name,
                setName,setToken,image,setImage,
                password,setPassword,data,setData,
                habitData,setHabitData,todayHabit,
                setTodayHabit,
                historicData,setHistoricData,
            }}>
            {props.children}
        </UserContext.Provider>
    )}