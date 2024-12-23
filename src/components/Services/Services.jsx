import React, { useRef, useState } from 'react'
import "./Services.css"
import { trIcon, toIcon, fuleIcon, filtrationIcon, trImg, fuleImg, hydImg, fillImg } from "./img"
function Services() {

    const [activeIndex, setActiveIndex] = useState(0);
    const p = useRef()
    const handleTabClick = (index) => {
        setActiveIndex(index);
        p.current.scrollIntoView({ behavior: "smooth", block: "center" })
    };

    const content = [
        {
            title: "Transformer Oil Tests",
            description:
                "Plot Listing is a responsive Bootstrap 5 website template that included 4 different HTML pages. This template is provided by TemplateMo website. You can apply this layout for your static or dynamic CMS websites.",
            buttonText: "Discover More",
            imgSrc: trImg,
            iconSrc: trIcon,

        },
        {
            title: "Hydraulic & Turbine Oil Tests",
            description:
                "You can feel free to download, edit and apply this template for your website. Please tell your friends about TemplateMo website.",
            buttonText: "Explore More",
            imgSrc: hydImg,
            iconSrc: toIcon,
        },
        {
            title: "Fuel Tests",
            description:
                "Did you know? You can get the best free HTML templates on Too CSS blog. Visit the blog pages and explore fresh and latest website templates.",
            buttonText: "More Listing",
            imgSrc: fuleImg,
            iconSrc: fuleIcon,
        },
        {
            title: "Filtration",
            description:
                "Image credits go to Unsplash website that provides free stock photos for anyone. Images used in this Plot Listing template are from Unsplash.",
            buttonText: "Discover More",
            imgSrc: fillImg,
            iconSrc: filtrationIcon,
        },
    ];

    return (
        <>
            <div className="popular-categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Our Services</h2>
                                <h6>Check Them Out</h6>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="naccs">
                                <div className="grid">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="menu">
                                                {content.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className={`thumb ${activeIndex === index ? "active" : ""}`}
                                                        onClick={() => handleTabClick(index)}
                                                    >
                                                        <span className="icon">
                                                            <img src={item.iconSrc} alt="" />
                                                        </span>
                                                        {item.title}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-lg-9 align-self-center">
                                            <ul className="nacc" ref={p}>
                                                {content.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className={`${activeIndex === index ? "active" : ""}`}
                                                    >
                                                        <div>
                                                            <div className="thumb">
                                                                <div className="row">
                                                                    <div className="col-lg-5 align-self-center" >
                                                                        <div className="left-text">
                                                                            <h4>{item.title}</h4>
                                                                            <p>{item.description}</p>
                                                                            {/* <div class="main-white-button"><a rel="nofollow"
                                                                                href={item.link}><i class="fa fa-eye"></i> Read More</a></div> */}
                                                                        </div>
                                                                        <button type="button" class="btn btn-outline-light"><a rel="nofollow"
                                                                            href={item.link}><i class="fa fa-eye"></i> Read More</a></button>

                                                                    </div>
                                                                    <div className="col-lg-7 align-self-center">
                                                                        <div className="right-image">
                                                                            <img src={item.imgSrc} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services