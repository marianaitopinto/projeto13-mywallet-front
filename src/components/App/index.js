import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import UserContext from '../../context/UserContext';
import LoginPage from "../LoginPage";
import Register from "../Register";
import Resume from "../Resume";
import NewEntry from "../NewEntry";
import NewOut from "../NewOut";

import { GlobalStyle } from "../App/style.js"

export default function App() {
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");

    return (
        <>
            <UserContext.Provider value={{ token, setToken, user, setUser }}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/newentry" element={<NewEntry />} />
                        <Route path="/newout" element={<NewOut />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}