import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "./App.css"
import React from 'react'
import { Header, Footer, Container } from "./components/index"
export const App = () => {
    return <>
        <Header />
        <Container />
        <Footer />
    </>
}
