import React, { useState } from 'react';
import './css/Banner.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import PuruImage1 from "../../assets/white/1.png";


const Banner = () => {

    return (
        <div className="credits-store-banner">
           <div className="credits-store-banner-image-container">
                <img className="credits-store-banner-image" src={PuruImage1}></img>
                <p>Your total credits: 12345</p>
           </div>
           <div className="credits-store-banner-text">
                <h1><span className="credits-store-banner-text-highlight">COMING SOON!</span></h1>
                <p>Estimate Completion: 1st August 2021</p>
                
           </div>
        </div>

    );
}

export default Banner;
