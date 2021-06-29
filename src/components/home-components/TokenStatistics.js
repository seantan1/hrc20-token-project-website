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
                            <h1>Unique Holders</h1>
                            <p>1,306</p>
                        </div>
                        <div className="stats-container">
                            <h1>Locked in Vault</h1>
                            <p>567,890 tokens</p>
                        </div>
                        <div className="stats-container">
                            <h1>Distributed rewards</h1>
                            <p>123,456 tokens</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TokenStatistics;
