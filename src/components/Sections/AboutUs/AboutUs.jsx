import React from 'react'
import "./AboutUs.css"
import { aboutImg, lab1, lab2, lab3, lab4, lab5 } from "../Services/img"
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20 } from '../Services/img'
function AboutUs() {



    return (
        <>
            <div class="recent-listing">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>About Us</h2>

                            </div>
                            <div class="container img-carousel">
                                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" data-bs-interval="5000">
                                            <img src={aboutImg} class="d-block w-100 h-8" alt="..." />
                                        </div>
                                        <div class="carousel-item" data-bs-interval="1000">
                                            <img src={lab1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={lab2} class="d-block w-100" data-bs-interval="1000" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={lab3} class="d-block w-100" data-bs-interval="1000" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={lab4} class="d-block w-100" data-bs-interval="1000" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={lab5} class="d-block w-100" data-bs-interval="1000" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" id='client' type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container " >
                <div className="section-heading logo-section">
                    <h2>Our Client</h2>
                </div>

                <div className="logos">
                    <div className="logos-slide">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                        <img src={img20} />
                        <img src={img4} />
                        <img src={img5} />
                        <img src={img6} />
                        <img src={img7} />
                        <img src={img8} />
                        <img src={img9} />
                        <img src={img10} />
                        <img src={img11} />
                        <img src={img12} />
                        <img src={img13} />
                        <img src={img14} />
                        <img src={img15} />
                        <img src={img16} />
                        <img src={img17} />
                        <img src={img18} />
                        <img src={img19} />
                    </div>

                    <div className="logos-slide">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                        <img src={img20} />
                        <img src={img4} />
                        <img src={img5} />
                        <img src={img6} />
                        <img src={img7} />
                        <img src={img8} />
                        <img src={img9} />
                        <img src={img10} />
                        <img src={img11} />
                        <img src={img12} />
                        <img src={img13} />
                        <img src={img14} />
                        <img src={img15} />
                        <img src={img16} />
                        <img src={img17} />
                        <img src={img18} />
                        <img src={img19} />
                        <img src={img1} />

                    </div>
                </div>
            </div>


        </>
    )
}

export default AboutUs