import React, { useState } from 'react';
import './css/TokenStatistics.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';


// components import

const TokenStatistics = () => {

    return (
        <div className="token-stats">
            <div className="stats-section">
                <div className="stats-section-inner-frame">
                    <div className="stats-section-inner-frame-inner">
                        <div className="stats-container">
                            <h3>Unique Holders</h3>
                            <p>1,306</p>
                        </div>
                        <div className="stats-container">
                            <h3>Locked in Vault</h3>
                            <p>567,890 tokens</p>
                        </div>
                        <div className="stats-container">
                            <h3>Distributed rewards</h3>
                            <p>123,456 tokens</p>
                        </div>
                    </div>
                    <div className="stats-section-inner-frame-inner">
                        <div className="stats-container">
                            <h3>Total Marketcap</h3>
                            <p>$10,000</p>
                        </div>
                        <div className="stats-container">
                            <h3>Total supply</h3>
                            <p>10,000,000 tokens</p>
                        </div>
                        <div className="stats-container">
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
