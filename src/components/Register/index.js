import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Register() {
    const navigate = useNavigate();
    
    return (
        <>
            <BodyCss>
                <img src={logo} alt="logo" />
                <Form >
                    <input placeholder="   Nome" type='text' required></input>
                    <input placeholder="   E-mail" type='email' required></input>
                    <input placeholder="   Senha" type='password' required></input>
                    <input placeholder="   Confirme a senha" type='password' required></input>
                    <button type="submit"> Cadastrar</button>
                </Form>
                <p onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</p>
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