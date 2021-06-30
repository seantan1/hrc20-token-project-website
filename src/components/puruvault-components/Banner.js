import React, { useState } from 'react';
import './css/Banner.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import PuruImage5 from "../../assets/white/5.png";

// components import

const Banner = () => {

    return (
        <div className="vault-banner">
           <div className="vault-banner-image-container">
                <img className="vault-banner-image" src={PuruImage5}></img>
           </div>
           <div className="vault-banner-text">
                <p><span className="vault-banner-text-highlight">$PURU</span> Vault</p>
           </div>
        </div>

    );
}

export default Banner;
