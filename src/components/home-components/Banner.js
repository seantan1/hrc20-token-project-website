import React, { useState } from 'react';
import './css/Banner.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import BannerBackground from '../../assets/white/home-banner-background.png';

// components import

const Banner = () => {

    return (
        <div className="banner">
           <div className="banner-image-container">
                <img className="banner-background-image" src={BannerBackground}></img>
           </div>
           <div className="banner-text">
                <p>Every day is <span className="banner-text-highlight">$PURU</span> day!</p>
                <button className="buy-now-button">Buy on Viperswap</button>
           </div>
        </div>

    );
}

export default Banner;
