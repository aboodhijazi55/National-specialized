import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import "./Home.css"
import { AboutUs, Banner, Services } from "../../index"
function Home() {
    const location = useLocation();

    useEffect(() => {
        // Function to handle scrolling to the section
        const scrollToSection = () => {
            if (window.location.hash) {
                const elementId = window.location.hash.substring(1); // Remove the `#`
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        // Scroll when the component is mounted or the hash changes
        setTimeout(scrollToSection, 0);
    }, [location]);
    return (
        <>
            <Banner />
            <Services />
            <AboutUs />
        </>
    )
}

export default Home