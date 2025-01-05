import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "./App.css"
import React from 'react'
import { Header, Footer } from "./components/index"
import { Home, TRTests, Fil, LubeTests, FuelTests } from "./components/Pages"
export const App = () => {
    return <>
        <Router>
            <Header />
            {/* <Container > */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/TRTests" element={<TRTests />} />
                <Route path="/LubeTests" element={<LubeTests />} />
                <Route path="/FuelTests" element={<FuelTests />} />
                <Route path="/Fil" element={<Fil />} />
            </Routes>
            {/* </Container> */}
            <Footer />
        </Router>
    </>
}
