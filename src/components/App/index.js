import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import Register from "../Register";


import { GlobalStyle } from "../App/style.js"

export default function App() {

    return (
       <>
            <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </BrowserRouter>
        </>
    )
}