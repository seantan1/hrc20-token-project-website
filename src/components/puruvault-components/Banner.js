import React, { useState, useEffect } from 'react';
import './css/Banner.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import PuruImage5 from "../../assets/white/5.png";
import Web3 from 'web3';

// import constants
import {
    VAULT_CONTRACT_ADDRESS,
    VAULT_CONTRACT_ABI
} from '../../contract-data/token-contract-data.js';

// bignumber config
const BigNumber = require('bignumber.js');
BigNumber.config({ DECIMAL_PLACES: 2 }) ;

const Banner = (props) => {

    const [userRating, setUserRating] = useState(0);
    const [userShareInRewards, setUserShareInRewards] = useState(0);

    useEffect(() => {
        if (props.authorised) {
            let web3 = new Web3(window.ethereum);
            // let contract = new web3.eth.Contract(TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS);
            let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);

            contractVault.methods.getRatingValueByAddress(props.account).call().then(function (result) {
                let bn = new BigNumber(web3.utils.fromWei(result)).div(1);
                setUserRating(bn.toString());
                // setUserRating(web3.utils.fromWei(result));
            });

            contractVault.methods.getRewardSharePercentage(props.account).call().then(function (result) {
                let rewardShare = result/10000000;
                if (rewardShare > 0 && rewardShare < 1/1000000) {
                    rewardShare = "<0.00001";
                }
                setUserShareInRewards(rewardShare);
            });
        }
    }, [props.authorised, props.account, props.refreshData]);

    return (
        <div className="vault-banner">
            <div className="vault-banner-image-container">
                <img className="vault-banner-image" src={PuruImage5} alt="puru"></img>
            </div>
            <div className="vault-banner-text">
                <p><span className="vault-banner-text-highlight">$PURU</span> Vault</p>
            </div>
            <div className="vault-banner-stats-container">
                <p>Your rating: <span className="vault-banner-stats-pink">{userRating}</span></p>
                <p>Share in rewards: <span className="vault-banner-stats-pink">{userShareInRewards}%</span></p>
                <a href="#new-deposit"><button className="new-deposit-button">+ Deposit</button></a>
            </div>
        </div>

    );
}

export default Banner;
