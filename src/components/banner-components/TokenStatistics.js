import React, { useState } from 'react';
import './css/TokenStatistics.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import PuruImage from '../../assets/PURU.png';

// components import

const TokenStatistics = () => {

    return (
        <div className="token-stats">
            <div className="tokenomics-section">
                <h1>PURU Stats</h1>
                <div className="tokenomics-section-inner-frame">
                    <div className="tokenomics-section-inner-frame-inner">
                        <div className="tokenomics-container">
                            <h3>Unique Holders</h3>
                            <p>1,306</p>
                        </div>
                        <div className="tokenomics-container">
                            <h3>Locked in Vault</h3>
                            <p>567,890 tokens</p>
                        </div>
                        <div className="tokenomics-container">
                            <h3>Distributed rewards</h3>
                            <p>123,456 tokens</p>
                        </div>
                    </div>
                    <div className="tokenomics-section-inner-frame-inner">
                        <div className="tokenomics-container">
                            <h3>Total Marketcap</h3>
                            <p>$10,000</p>
                        </div>
                        <div className="tokenomics-container">
                            <h3>Total supply</h3>
                            <p>10,000,000 tokens</p>
                        </div>
                        <div className="tokenomics-container">
                            <h3>Circulating supply</h3>
                            <p>1,234,567 tokens</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TokenStatistics;
