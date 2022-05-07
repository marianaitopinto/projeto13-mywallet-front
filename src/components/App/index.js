import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import UserContext from '../../context/UserContext';
import LoginPage from "../LoginPage";
import Register from "../Register";
import Resume from "../Resume";


import { GlobalStyle } from "../App/style.js"

export default function App() {
    const [token, setToken] = useState("");

    return (
        <>
            <UserContext.Provider value={{ token, setToken }}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}