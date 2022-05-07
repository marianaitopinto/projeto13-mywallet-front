import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

import UserContext from "../../context/UserContext";
import logo from "../../assets/logo.png";

export default function LoginPage() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ usermail: "", password: "" });
    const [loading, setLoading] = useState(false);
    const {setToken} = useContext(UserContext);
    console.log(userData);
    console.log(loading);

    function Login(e) {
        e.preventDefault();
        setLoading(true);
        const promise = axios.post(`http://localhost:5000/login`, userData);
        promise.then((res) => {
            setToken(res.data.token);
            console.log('funcionou');
            navigate('/resume');

        })
        promise.catch(() => {
            alert("Usuário ou senha incorretos");
            setLoading(false);
        });
    }

    return (
        <>
            <BodyCss>
                <img src={logo} alt="logo" />
                <Form onSubmit={Login}>
                    <input placeholder="   E-mail" type='text' disabled={loading} onChange={(e) => setUserData({ ...userData, usermail: e.target.value })} value={userData.usermail} required></input>
                    <input placeholder="   Senha" type='password' onChange={(e) => setUserData({ ...userData, password: e.target.value })} value={userData.password} required></input>
                    <button type="submit">{loading ?  <Oval color="#FFFFFF" height={30} width={30} /> : `Entrar`}</button>
                </Form>
                <p onClick={() => navigate("/register")}>Primeira vez? Cadastre-se!</p>
            </BodyCss>
        </>
    )
}

const BodyCss = styled.div`
    background: #9056BF;
    width: 375px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 147px;
        height: 40px;
        margin-top: 190px;
        margin-bottom: 50px;
    }
    input {
        width: 303px;
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
    button {
        width: 303px;
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
    p {
        font-size: 15px;
        line-height: 18px;
        font-weight: 700;
        text-align: center;
        margin-top: 20px;
        color: #FFFFFF;
        :hover{
                cursor: pointer;
                filter: brightness(0.9);
        }
    }
`

const Form = styled.form`
display:flex;
flex-direction: column;
justify-content: center`