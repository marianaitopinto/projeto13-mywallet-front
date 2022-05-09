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
    const [total, setTotal] = useState(0);

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

    useEffect(sum, [movements]);

    console.log(total);

    function sum() {
        const entries = movements.filter((e) => e.type === 'entry');
        const out = movements.filter((e) => e.type === 'out');
        let sumEntries = 0;
        let sumOuts = 0;

        entries.forEach(element => {
            sumEntries += parseFloat(element.value);   
            console.log(sumEntries)         
        });

        out.forEach(element => {
            sumOuts += parseFloat(element.value);            
        });

        sum = (sumEntries - sumOuts).toFixed(2).replace('.', ',');
        console.log(total);
        setTotal(sum)
    }
    console.log(total)
 
    if (!token) {
        navigate('/');
    }

    return (
        <BodyCss>
            <Header>
                <h1>Olá, {user}</h1>
                <img src={logout} alt='Logout icon' onClick={() => navigate('/')}></img>
            </Header>
            <Container>
                {movements.length === 0 ? (
                    <p>Não há registros de entrada ou saída</p>
                ) : (
                    <>{movements.map((movement) => {
                        return (
                            <>
                                <MovementsContainer>
                                    <div>
                                    <p className='date'>{movement.date}</p>
                                    <p className='description'>{movement.description}</p>
                                    </div>
                                    <p className={movement.type === 'entry' ? 'green' : 'red'}>{movement.value}</p>
                                </MovementsContainer>
                            </>
                        )
                    })}
                        <Total>
                            <p>SALDO</p>
                            <p className={parseFloat(total) >= 0 ? 'green' : 'red'}>{total}</p>
                        </Total>
                    </>
                )
                }
            </Container>
            <Buttons>
                <button onClick={() => navigate('/newentry')}>Nova entrada</button>
                <button onClick={() => navigate('/newout')}>Nova saída</button>
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
    :hover{
        cursor: pointer;
        filter: brightness(0.9);
        }
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

const MovementsContainer = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 10px;

    div {
        display:flex;
        margin-right: 110px;
        gap: 15px;
    }
    .date {
        font-size: 16px;
        line-height: 19px;

        color: #C6C6C6;
    }

    .description {
        font-size: 16px;
        line-height: 19px;
        text-align: left;
        color: #000000;
    }

    .red {
        font-size: 16px;
        line-height: 19px;
        text-align: right;

        color: #C70000;
    }

    .green {
        font-size: 16px;
        line-height: 19px;
        text-align: right;

        color: #03AC00;
    }
`

const Total = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 10px;

    p {
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;

    }

    .red {
        font-size: 16px;
        line-height: 19px;
        text-align: right;

        color: #C70000;
    }

    .green {
        font-size: 16px;
        line-height: 19px;
        text-align: right;

        color: #03AC00;
    }
`