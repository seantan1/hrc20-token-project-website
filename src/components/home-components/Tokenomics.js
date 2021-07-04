import React from 'react';
import './css/Tokenomics.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';

import PuruImage7 from "../../assets/white/7.png";
import PuruImage5 from "../../assets/white/5.png";

const Tokenomics = () => {

    return (
        <div className="tokenomics">
            <div className="tokenomics-section">
                <h1>T o k e n o m i c s</h1>
                <div className="tokenomics-section-inner-frame">
                    <div className="tokenomics-section-inner-frame-inner">
                        <div className="tokenomics-container">
                            <h1>20%</h1>
                            <h3>Fee on transfer</h3>
                            <p>
                                A slash fee is collected from panic sellers into the vault which are distributed to chad stakers.
                            </p>
                        </div>
                        <div className="tokenomics-container">
                            <h1>0%</h1>
                            <h3>Fee for chads</h3>
                            <p>
                                Upon completing the minimum staking period, users receive a slash fee exemption equal to their amount staked.
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
                            <h3>Dev's cut</h3>
                            <p>
                                5% of all distributed rewards goes into the development fund for events and to build more awesome stuff on Harmony!
                            </p>
                        </div>
                    </div>
                    <div className="tokenomics-note-text-container">
                        <a className="tokenomics-note-text" href="/info">&gt;&gt; Please read the full tokenomics in detail before purchasing! &lt;&lt;</a>
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
                                <p>Rating earned = (Token amount) x (Number of days locked)^2 / 2</p>
                                <p>Your share of rewards = (Your total rating)/(Everyone's rating) x 100%</p>
                                <a className="tokenomics-info-container-read-more" href="/info">Read more about the tokenomics</a>
                            </div>
                            <div className="tokenomics-info-container">
                                <h1>Earn credits!</h1>
                                <p>Earn 1 credit permanently for every rating earned from staking.</p>
                                <p>Credits can be spent in the Credits Shop, which would be added</p>
                                <p>very soon in the near the future!</p>
                            </div>
                            <div className="tokenomics-info-image-container">
                                <img className="tokenomics-info-image" src={PuruImage7} alt="puru"></img>
                                <img className="tokenomics-info-image" src={PuruImage5} alt="puru"></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Tokenomics;
