import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import UserContext from "../../context/UserContext";
import logout from "../../assets/logout.png";

export default function Resume() {
    const navigate = useNavigate();
    const { token, user } = useContext(UserContext);
    const [movements, setMovements] = useState([]);
    console.log(token)
    
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = axios.get(`http://localhost:5000/transactions`, config);
        promise.then(res => {
            console.log(res.data)
            setMovements(res.data);
        })
        promise.catch(() => {
            alert("Erro ao buscar movimentações");
        });
    }, []);

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
                {movements.length === 0 ?
                    <p>Não há registros de entrada ou saída</p>
                    :
                    movements.map((movement) => {
                        return (
                            <>
                                <p>movement.description</p>
                                <p>movement.value</p>
                            </>
                        )
                    })
                }
            </Container>
            <Buttons>
                <button onClick={() => navigate("/newentry")}>Nova entrada</button>
                <button onClick={() => navigate("/newout")}>Nova saída</button>
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