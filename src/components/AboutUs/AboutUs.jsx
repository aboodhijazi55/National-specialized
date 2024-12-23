import React from 'react'
import "./AboutUs.css"
import { trImg, hydImg, fuleImg, aboutImg } from "../Services/img"

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
                                            <img src={hydImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={fuleImg} class="d-block w-100" data-bs-interval="1000" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div class="section-heading our-client">
                                <h2>Our Client</h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default AboutUs