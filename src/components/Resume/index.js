import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


import UserContext from "../../context/UserContext";
import logout from "../../assets/logout.png";

export default function Resume() {
    const navigate = useNavigate();
    const {token, user} = useContext(UserContext);

    if (!token) {
        navigate('/');
    }

    return (
        <BodyCss>
            <Header>
                <h1>Olá, {user}</h1>
                <img src={logout} alt="Logout icon"></img>
            </Header>
            <Container>
                <p>Não há registros de entrada ou saída</p>
            </Container>
            <Buttons>
                <button>Nova entrada</button>
                <button>Nova saída</button>
            </Buttons>
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

    h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    }

    button {
    width: 155px;
    height: 114px;
    border: none;
    background: #A328D6;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 700;
    color: #FFFFFF;
    }
`;

const Header = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    align-items: center;
    width: 326px
`

const Container = styled.div`
    margin-top: 20px;
    width: 326px;
    height: 446px;

    background: #FFFFFF;
    border-radius: 5px;

p{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #868686;

}
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    width: 336px
`