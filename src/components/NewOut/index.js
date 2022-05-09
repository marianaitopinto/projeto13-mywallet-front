import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useState, useContext } from "react";

import UserContext from "../../context/UserContext";

export default function NewOut() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { token } = useContext(UserContext);

    const [newOut, setNewOut] = useState({ value: '', description: '', type: 'out' });

    function Out(e) {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        console.log(config)
        e.preventDefault();
        setLoading(true);
        console.log(newOut);
        const promise = axios.post(`http://localhost:5000/transactions`, newOut, config);
        promise.then(() => {
            console.log('chegou aqui2')
            setLoading(false);
            navigate('/resume');
        })
        promise.catch(() => {
            alert("Erro ao cadastrar transação!");
            setLoading(false);
        });
    }
    console.log(newOut);

    return (
        <BodyCss>
            <Header>
                <h1>Nova saída</h1>
            </Header>
            <Form onSubmit={Out}>
                <input placeholder="   Valor" type='text' disabled={loading} onChange={(e) => setNewOut({ ...newOut, value: e.target.value })} value={newOut.value} required></input>
                <input placeholder="   Descrição" type='text' disabled={loading} onChange={(e) => setNewOut({ ...newOut, description: e.target.value })} value={newOut.description} required></input>
                <button>{loading ? <Oval color="#FFFFFF" height={30} width={30} /> : `Salvar saída`}</button>
            </Form>
        </BodyCss>
    )
}

const BodyCss = styled.div`
background: #9056BF;
width: 375px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
color: #FFFFFF;
font-weight: 700;

input {
    width: 326px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    color: #000000;
    margin-bottom: 8px;
    }

h1 {
font-weight: 700;
font-size: 26px;
line-height: 31px;
margin-bottom: 35px;
}

button {
    width: 326px;
    height: 45px;
    background: #A328D6;
    border-radius: 4.63636px;
    border: none;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    margin-top: 10px;
    color: #FFFFFF;
    font-weight: 700;
}
`;

const Header = styled.div`
display: flex;
margin-top: 40px;
justify-content: space-between;
align-items: center;
width: 326px
`
const Form = styled.form`
display:flex;
flex-direction: column;
justify-content: center`