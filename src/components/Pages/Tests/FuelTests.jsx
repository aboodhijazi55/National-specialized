import React, { useEffect } from 'react'
import "./TRTests.css"
import bac from "../../../assets/img/lab/kai-dahms-217U8oxGoQ4-unsplash.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask } from '@fortawesome/free-solid-svg-icons'
import { device1, device2, device3, device4, device5, device6, device7, device8, device9, device10, device11, device12, device13, device14, device15, device16, device17, device18 } from "../../Sections/Services/img"


function FuelTests() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <>
        <meta name="description"
            content="الوطنية المنخصصه للمخبرات - Fuel Testing - يعد الاختبار ضروريًا لضمان جودة وأداء وسلامة الوقود مثل الديزل والبنزين "></meta>
        <title>NSL -Fuel Testing</title>
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
                <dic className="container h1">
                    <h1>Fuel Tests</h1>
                </dic>
                <dic className="container h6">
                    <h6 className='h6'><span>Fuel Testing </span>   is essential to ensure the quality, performance, and safety of fuels such as diesel, gasoline, and kerosene. It evaluates key parameters like density, viscosity, flash point, and contamination levels to ensure compliance with industry standards. Regular testing helps improve fuel efficiency, prevent engine damage, and reduce emissions, supporting reliable and sustainable operation.</h6>
                </dic>
                <div class="  container float-section">
                    <img src={device14} alt="" className=' d device1' />
                    <h5 className='h5'>Chemical Proparaties</h5>

                    <h5><FontAwesomeIcon icon={faFlask} />
                        Acidity <span>(ASTM D974 ,IEC 62021)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Water by distillation  <span>(ASTM D95)</span>
                    </h5>

                    <h5><FontAwesomeIcon icon={faFlask} />
                        Ash content <span>(ASTM D482)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Calorific value Net <span>(ASTM D240)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Sulfur Content <span>(ASTM D4294)</span>
                    </h5>

                </div>

                <div class="float-section">
                    <img src={device18} alt="" className=' d device2' />
                    <h5><FontAwesomeIcon icon={faFlask} />
                        AAS - Atomic Absorption Spectroscopy <span>(ASTM D5863)</span>
                    </h5>
                    <p>Atomic Absorption Spectroscopy (AAS) is a precise analytical technique used in fuel testing to detect and quantify trace metals such as iron, nickel, vanadium, and sodium. These metals can impact fuel quality and lead to corrosion, deposits, or equipment damage. AAS ensures accurate monitoring of metal content, helping to assess fuel compliance with standards and optimize its performance. This method is essential for maintaining the efficiency and reliability of engines and industrial systems.</p>
                </div>


                <div class=" float-section">

                    <img src={device9} alt="" className=' d device3' />
                    <h5 className='h5'>Physical Proparaties</h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Flash Point <span>(ASTM D93)</span>
                    </h5>

                    <h5><FontAwesomeIcon icon={faFlask} />
                        Density<span>(ASTM D1298 , ISO 12185)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Kinematic Viscosity <span>(ASTM D445)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Pour Point <span>(ASTM D97)</span>
                    </h5>



                </div>
                <div class=" img-section col-12">
                    <img className='col col-sm-2' src={device4} alt="" />
                    <img className='col col-sm-2' src={device6} alt="" />
                    <img className='col col-sm-2' src={device8} alt="" />
                    <img className='col col-sm-2' src={device12} alt="" />
                    <img className='col col-sm-2' src={device13} alt="" />
                    <img className='col col-sm-2' src={device15} alt="" />
                    <img className='col col-sm-2' src={device16} alt="" />
                </div>
                {/* <div class="col-lg-12 float-section">

                    <img src={device10} alt="" className=' d device4' />
                    <h5 className='h5'>Electrical Proparaties</h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Breakdown Voltage <span>(ASTM D877 & D1816)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Dissipation Factor Or Loss Factor @ 90C <span>(IEC 247)</span>
                    </h5>
                </div> */}
            </div>
        </div>
    </>
}

export default FuelTests