import React, { useState } from 'react';
import './css/FutureProjects.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import PuruImage from '../../assets/PURU.png';

// components import

const TokenStatistics = () => {

    return (
        <div className="future-projects">
            <div className="future-projects-section">
                <h1 id="future-projects-title">Future Projects</h1>
                <div className="future-projects-section-inner-frame">
                    <div className="future-projects-section-inner-frame-inner">
                        <div className="future-projects-container">
                            <h3>PURUs NFT GACHA & AUCTION</h3>
                            <p>Gacha system to obtain random puru NFT collectables. Trade with other users or bid for them on auction to complete your collection!</p>
                        </div>
                        <div className="future-projects-container">
                            <h3>PURU COLLABORATIONS</h3>
                            <p>As puru goes on a journey to develop for other projects in the harmony community. Users can spend their earned credits for exclusive entitlements in some of these projects!</p>
                        </div>
                        <div className="future-projects-container">
                            <h3>PURUSWAP</h3>
                            <p>A harmony DEX which lets you use your puru NFT profile to trade, add liquidity, participate in events and more!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TokenStatistics;
