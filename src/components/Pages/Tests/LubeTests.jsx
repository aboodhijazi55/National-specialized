import React, { useEffect } from 'react'
import "./TRTests.css"
import bac from "../../../assets/img/lab/kai-dahms-217U8oxGoQ4-unsplash.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask } from '@fortawesome/free-solid-svg-icons'
import { device1, device2, device3, device4, device5, device6, device7, device8, device9, device10, device11, device12, device13, device14, device15, device16, device17, device18 } from "../../Sections/Services/img"

function LubeTests() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <>

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
                    <h1>Lube and Engine Oil Tests</h1>
                </dic>
                <dic className="container h6">
                    <h6 className='h6'><span>Lube oil testing </span>  is an essential process for monitoring the performance and condition of lubricating oils used in machinery and engines. This testing evaluates critical properties such as viscosity, total base number (TBN), acidity, water content, and the presence of contaminants like metal particles or oxidation byproducts. By analyzing these parameters, lube oil testing ensures optimal lubrication, reduces wear and tear, and prevents equipment failures. Regular testing helps extend machinery life, optimize performance, and minimize operational downtime, making it a key aspect of preventive maintenance in industrial and automotive applications.</h6>
                </dic>
                <div class="  container float-section">
                    <img src={device14} alt="" className=' d device1' />
                    <h5 className='h5'>Chemical Proparaties</h5>

                    <h5><FontAwesomeIcon icon={faFlask} />
                        Oxidation Stability- Acidity <span>(ASTM D943)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Total Base Number- TBN <span>(ASTM D2896)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Water Content  <span>(ASTM D1533)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Neutralization NO.  <span>(ASTM D974)</span>
                    </h5>

                    <h5><FontAwesomeIcon icon={faFlask} />
                        Copper Strip Corrosion <span>(ASTM D130)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Varnish MPC  <span>(ASTM D7843)</span>
                    </h5>


                </div>

                {/* <div class="float-section">
                    <img src={device18} alt="" className=' d device2' />
                    <h5><FontAwesomeIcon icon={faFlask} />
                        DGA - Dissolved Gas Analyzer <span>(ASTM D3612 ,IEC 60559)</span>
                    </h5>
                    <p>Transformers are vital components in both the transmission and distribution of electrical power. The early detection of incipient faults in transformers is extremely cost effective by reducing unplanned outages. The most sensitive and reliable technique used for evaluating the health of oil filled electrical equipment is dissolved gas analysis (DGA)</p>
                </div> */}


                <div class=" float-section">

                    <img src={device9} alt="" className=' d device2' />
                    <h5 className='h5'>Physical Proparaties</h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Flash Point <span>(ASTM D93)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Color  <span>(ASTM D1500)</span>
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

                    <h5><FontAwesomeIcon icon={faFlask} />
                        Purity <span>(ISO 5884)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Foaming <span>(ASTM D892)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Air Release  <span>(ASTM D3427)</span>
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

export default LubeTests