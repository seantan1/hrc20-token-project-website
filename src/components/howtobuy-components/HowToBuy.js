import React, { useState } from 'react';
import './css/HowToBuy.css';
import 'font-awesome/css/font-awesome.css';

import step1Image from '../../assets/step1.png';
import step2Image from '../../assets/step2.png';

const HowToBuy = () => {

    return (
        <div className="how-to-buy">
            <h1>How To Buy</h1>
            <p>Token address: 0x40D7D3B1ecB855D10Cb2deD0ceBa1c73bb323FF5</p>
            <div className="steps-container">
                <h2>Step 1:</h2>
                <p>Go to <a className="viperswap-link" href="https://viper.exchange/#/swap" rel="noreferrer" target="_blank">ViperSwap</a></p>
                <img className="steps-image" src={step1Image}></img>
            </div>
            <div className="steps-container">
                <h2>Step 2:</h2>
                <p>Click on "Select a token" and paste the token address specified above.</p>
                <img className="steps-image" src={step2Image}></img>
            </div>
            <div className="steps-container">
                <h2>Step 3:</h2>
                <p>Click on "Swap" to swap your ONE to PURUs!</p>
            </div>
        </div>

    );
}

export default HowToBuy;
