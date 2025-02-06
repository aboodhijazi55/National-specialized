import React from 'react'
import "./Footer.css"
import nsl from "../../assets/img/logo.png"
import Email from './Email'
import { email, phone } from "../Sections/Services/img"
function Footer() {

    const date = new Date().getFullYear()


    return <> <footer id='footer'>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="about-footer">
                        <div class="logo">
                            <img src={nsl} alt="Plot Listing" />
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <ul className='ul'>
                                    <li><img className="img" src={phone} alt="" />  <a href="#">+ 962 6 420 2732</a></li>
                                    <li><img className="img" src={phone} alt="" />  <a href="#">+ 962 79 1931336</a></li>
                                    <li><img className="img" src={email} alt="" />   <a href="#">info@nsl-me.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="helpful-links">
                        <h4>Contact Us</h4>
                        <Email />
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="contact-us">
                        <h4>Our Location</h4>
                        <p><a href="https://www.google.com/maps/place/National+Specialized+Laboratory+Co/@31.8982198,35.9232209,160m/data=!3m1!1e3!4m6!3m5!1s0x151b58af059c0147:0xd0f0377d85c62066!8m2!3d31.8979219!4d35.9228881!16s%2Fg%2F11fmyq4njl?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">Amman -Al Muqabalayn, Abu Bakr Al-Siddeeq St -Abu Awwad Commercial Complex bulid No.100</a></p>
                        <div class="row">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1693.2121460065262!2d35.922888!3d31.897922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b58af059c0147%3A0xd0f0377d85c62066!2sNational%20Specialized%20Laboratory%20Co!5e0!3m2!1sen!2sjo!4v1735808300558!5m2!1sen!2sjo"
                                width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="sub-footer">
                        <p>Copyright © {date} NSL Co.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    </>
}

export default Footer