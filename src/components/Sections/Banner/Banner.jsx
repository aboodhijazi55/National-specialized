import React from 'react'
import "./Banner.css"
import Video from './Video'

function Banner() {
    return <>
        <Video />
        <div class="main-banner" id='home'>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="top-text header-text">
                            <h1>NSL</h1>
                            <h6>The <span>First </span> and Only Independent Laboratory In Jordan</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default Banner