import React from 'react';
import './css/FutureProjects.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';

import PuruImage1 from "../../assets/black/1.png";
import PuruImage3 from "../../assets/black/3.png";
import PuruImage4 from "../../assets/black/4.png";

const TokenStatistics = () => {

    return (
        <div className="future-projects">
            <div className="future-projects-section">
                <h1 id="future-projects-title">Future Projects</h1>
                <div className="future-projects-section-inner-frame">
                    <div className="future-projects-section-inner-frame-inner">
                        <div className="future-projects-container">
                            <img className="future-projects-image" src={PuruImage1} alt="puru"></img>
                            <h3>PURUs NFT GACHA & TRADING</h3>
                            <p>Gacha system where users spend credits to obtain random puru NFT collectables. Buy, trade and sell with other users to complete your collection!</p>
                            <p className="future-project-progress-status-text">In Progress</p>
                        </div>
                        <div className="future-projects-container">
                            <img className="future-projects-image" src={PuruImage3} alt="puru"></img>
                            <h3>PURU COLLABORATIONS</h3>
                            <p>As puru goes on a journey to develop for other projects in the harmony community. Users can spend their earned credits for exclusive entitlements in some of these projects!</p>
                            <p className="future-project-progress-status-text">In Progress</p>
                        </div>
                        <div className="future-projects-container">
                            <img className="future-projects-image" src={PuruImage4} alt="puru"></img>
                            <h3>PURUSWAP</h3>
                            <p>On top of the usual swapping and liquidity pools, users can use their NFT profiles on the website to participate in events, competitions and more!</p>
                            <p className="future-project-progress-status-text">Coming Soon!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TokenStatistics;
