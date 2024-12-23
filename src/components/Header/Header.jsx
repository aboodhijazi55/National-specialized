import React, { useState } from 'react'
import './Header.css'

function Header() {

    const [scrollPosition, setScrollPosition] = useState(false);

    const handleScroll = (e) => {
        if (window.scrollY >= 25) {
            setScrollPosition(true)
        } else {
            setScrollPosition(false)
        }
    };
    window.addEventListener("scroll", handleScroll)
    return <>
        <div onScroll={handleScroll} className={scrollPosition ? "navbar navbar-expand-md mb-1 bg-dark navbar-dark text-white fixed-top" :
            "navbar navbar-expand-md bg-none navbar-dark mb-1 fixed-top navbar-scrolled"}>
            <div className="container">
                <a href="#x" className="navbar-brand">NATIONAL SPECIALIZED LABORATORY</a>
                <button className="navbar-toggler header-button" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a href="#hero" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#features" className="nav-link">Our Service</a></li>
                        <li className="nav-item"><a href="#learn" className="nav-link">Our Client</a></li>
                        <li className="nav-item"><a href="#next" className="nav-link">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Header