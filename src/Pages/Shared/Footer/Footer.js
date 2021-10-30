import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='mt-5 footer' style={{ padding:'10px'}}>
            <h2>CONTACT US</h2>
            <p>Block-102/B Shibgonh Dhaka-200, Bangladesh</p>
            <div className='pb-3 d-flex justify-content-center'>
                <div className='pe-3 m-5'>
                <BsFacebook/>
                  <p>FACEBOOK</p>
                </div>
                <div className='pe-3 m-5'>
                <FaInstagramSquare/>
                <p>INSTAGRAM</p>
                </div>
                <div className='pe-3 m-5'>
                <BsTwitter/>
                <p>TWITTER</p>
                </div>
                <div className='pe-3 m-5'>
                <BsYoutube/>
                <p>YOUTUBE</p>
                </div>
            </div>
            <div>
                <small>2021 ©Copyright. All Rights Reserved</small>
            </div>
        </div>
    );
};

export default Footer;