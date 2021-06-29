import React, { useState } from 'react';
import './css/Tokenomics.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import PuruImage from '../../assets/PURU.png';

// components import

const Tokenomics = () => {

    return (
        <div className="tokenomics">
            <div className="tokenomics-section">
                <h1>T o k e n o m i c s</h1>
                <p></p>
                <div className="tokenomics-section-inner-frame">
                    <div className="tokenomics-section-inner-frame-inner">
                        <div className="tokenomics-container">
                            <h1>35%</h1>
                            <h3>Fee on tranfer</h3>
                            <p>
                                High slash fee collected from panic sellers into the vault which are distributed to chad stakers.
                            </p>
                        </div>
                        <div className="tokenomics-container">
                            <h1>0%</h1>
                            <h3>Fee for chads</h3>
                            <p>
                                Upon completing the minimum staking period, users receive an exempt transfer fee equal to their amount staked.
                            </p>
                        </div>
                        <div className="tokenomics-container">
                            <h1>0.1%</h1>
                            <h3>Bounty Reward</h3>
                            <p>
                                Anyone can pay the network fee to distribute accumulated rewards to stakers and receive the bounty reward.
                            </p>
                        </div>
                        <div className="tokenomics-container">
                            <h1>5%</h1>
                            <h3>Dev cut</h3>
                            <p>
                                5% of all distributed rewards goes into the development fund to build more awesome stuff on Harmony!
                            </p>
                        </div>
                    </div>
                    <div className="tokenomics-info-container-outer">
                        <div className="tokenomics-info-container-outer-left">
                            <div className="tokenomics-info-container">
                                <h1>Token Allocation</h1>
                                <p>Inital Dex Oferring: 80%</p>
                                <p>Future events and development funds: 20%</p>
                                <p>Minting: disabled</p>
                            </div>
                            <div className="tokenomics-info-container">
                                <h1>Reward Calculation for stakers</h1>
                                <p>Your share of rewards is based on your rating where:</p>
                                <p>Rating = (Token amount) x (Number of days locked)</p>
                                <p>Your share of rewards = (Your rating)/(Total rating) x 100%</p>
                                <p>Ratings will be reduced by the amount gained originally when</p>
                                <p>the deposit is removed.</p>
                            </div>
                            <div className="tokenomics-info-container">
                                <h1>Earn credits!</h1>
                                <p>Earn 1 credit permanently for every rating earned from staking.</p>
                                <p>Credits can be spent in the Credits Shop, with loads more stuff</p>
                                <p>added in the future!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Tokenomics;
