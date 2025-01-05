import React, { useEffect } from 'react'
import "./TRTests.css"
import bac from "../../../assets/img/lab/kai-dahms-217U8oxGoQ4-unsplash.jpg"

function Fil() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <div class="test-banner">
                <img src={bac} alt="" className='bac-test' />
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
            <div class="container test">
                <div class="row">
                    <div className="container h1">
                        <h1> Oil Filtration </h1>
                    </div>
                    <div className="container h6">
                        <h6 className='h6'><span>Transformer oil filtration </span>   is a critical maintenance process to ensure the efficiency and reliability of power transformers. It involves removing impurities, moisture, sludge, and dissolved gases that can degrade the oil's insulating and cooling properties. By restoring the oil’s dielectric strength and thermal stability, filtration helps prevent electrical failures, reduces the risk of overheating, and extends the transformer's service life. Regular filtration is essential for minimizing downtime and maintaining safe and efficient operation of electrical systems.</h6>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Fil