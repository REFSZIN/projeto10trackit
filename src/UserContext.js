import { createContext } from "react";
import React, {useState} from "react";
import { Particles } from "@blackbox-vision/react-particles";
import axios from "axios";
const UserContext = createContext();
export default UserContext;
export function UserProvider (props){
    const [color, setColor] = useState([false, false, false, false, false, false, false]);
    const [token, setToken] = useState(null);
    const [data, setData] = useState(JSON.parse(localStorage.getItem("user")));
    const [habitData,setHabitData] = useState([]);
    const [today,setToday] = useState([]);
    const [historicData, setHistoricData] = useState([]);
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [nameHabit,setNameHabit] = useState('');
    const [daysHabit,setDaysHabit] = useState([]);
    const [image,setImage] = useState('');
    const [user,setUser] = useState('');
    const [percentage,setPercentage] = useState(0);
    const [password,setPassword] = useState('');
    const [load,setLoad] = useState(false);
    const [click, setClike] = useState(false);
    const [clickToday,setClickToday] = useState(false);
    const URL =`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit` 
    let valor = 0;

const localmenteLogado = () => {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD && localStorage.length > 0) {
        setLoad(1);
        axios.post(`${URL}/auth/login/`,
            {
                email: data.email,
                password: data.password,
            })
        .then(res => {
            setToken(res.data.token);
            setImage(res.data.image);   
            setName(res.data.name);   
            setData(res.data);
            let k = 0;
            for (let i = 0; i < today.length; i++) {
                if (today[i].done === true) {
                    k++;
                }
            setPercentage((100 * (k / today.length)));
        }
        })
        .catch(err => {
            alert(err.response.data.message);
            setLoad(0);
        });
    }
}
const postSign = async () => {
    const params = 
    {
        email: email,
        password: password
    }
    try {
        const req = axios.post(`${URL}/auth/login/`, params);
        req.then(res => {
            setToken(res.data.token)
            setImage(res.data.image);   
            setName(res.data.name);   
            setLoad(0);
            setData(res.data)
            localStorage.setItem("user",JSON.stringify(res.data))
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
    const params = {
        name: nameHabit,
        days: daysHabit
    }
    const headers = {
        headers: { Authorization: `Bearer ${data.token}`}
    }
    try {
        const req = axios.post(`${URL}/habits`, params, headers);
        req.then(res => {
            setLoad(0)
            setHabitData([...habitData, res.data])
        })
        .catch(err => {
            alert(err.response.data);
        });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const getHabits = () => {
    const headers = {
        headers: { Authorization: `Bearer ${data.token}`}
    }
    try {
        const req = axios.get(`${URL}/habits`, headers);
        req.then(res => {
            setHabitData(res.data)
        })
        .catch(err => {
            alert(err.response.data);
        });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const deleteHabits = (props) => {
    const headers = {
        headers: { Authorization: `Bearer ${data.token}`}
    }
    try {
        const req = axios.delete(`${URL}/habits/${props}`, headers);
        req.then((res) => {
            let aux = [...habitData];
            aux = aux.filter(item => item.id !== parseInt(props))
            setHabitData([...aux]);
        })
            .catch(err => {
                alert(err.response.data);
            });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const getToday = () => {

    const headers = {
        headers: { Authorization: `Bearer ${data.token}`}
    }
    try {
        const req = axios.get(`${URL}/habits/today`, headers);
        req.then(res => {
            setToday(res.data);
        })
        .catch(err => {
            alert(err.response);
        });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const postCheck = (props) => {
    const headers = {
        headers: { Authorization: `Bearer ${data.token}`}
    }
    try {
        const req = axios.post(`${URL}/habits/${props}/check`,{}, headers);
        req.then(res => {
            getToday();
            return res;
        })
            .catch(err => {
                alert(err.response.data);
            });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const postUnCheck = (props) => {
    const headers = {
        headers: { Authorization: `Bearer ${data.token}`}
    }
    try {
        const req = axios.post(`${URL}/habits/${props}/uncheck`,{}, headers);
        req.then(res => {
            getToday();
            
            return res;
        })
            .catch(err => {
                alert(err.response.data);
            });
    } 
    catch (error) {
        throw new Error(error);
    }
}
const getHistory = () => {
    const headers = {
        headers: { Authorization: `Bearer ${token}`}
    }
    try {
        const req = axios.post(`${URL}/habits/history/daily`, {}, headers);
        req.then(res => {
            setHistoricData(res.data)
        })
            .catch(err => {
                alert(err.response.data);
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
                postCheck,postUnCheck,setToday,color,
                getHistory,getToday,setHistoricData,
                postHabits,getHabits,historicData,
                postSignUp,postSign,deleteHabits,
                ParticlesJs,ParticlesJss,setUser,
                setPercentage,percentage,user,setClickToday,
                email,setEmail,token,name,setColor,
                setName,setToken,image,setImage,clickToday,
                password,setPassword,data,setData,click,setClike,
                habitData,setHabitData,today,load,setLoad,localmenteLogado,
                nameHabit,setNameHabit,daysHabit,setDaysHabit,valor
            }}>
            {props.children}
        </UserContext.Provider>
    )}