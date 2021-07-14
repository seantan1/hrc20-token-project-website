import React from 'react';
import './css/Banner.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import BannerBackground from '../../assets/white/home-banner-background.png';

// components import

const Banner = () => {

    return (
        <div className="banner">
           <div className="banner-image-container">
                <img className="banner-background-image" src={BannerBackground} alt="puru arrow moon"></img>
           </div>
           <div className="banner-text">
                <p>Every day is <span className="banner-text-highlight">$PURU</span> day!</p>
                <button className="buy-now-button" onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://viper.exchange/#/swap?inputCurrency=ONE&outputCurrency=0x1d611c8F37bc96772653B11d9410A2B71C684754';
                    }}>Buy on Viperswap</button>
           </div>
        </div>

    );
}

export default Banner;
