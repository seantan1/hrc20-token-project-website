import React, { useState, useEffect } from "react";
import './css/ProfileWindow.css';

import PuruImage4 from '../../assets/black/4.png';
import Web3 from 'web3';

// import constants
import {
    TOKEN_CONTRACT_ADDRESS,
    TOKEN_CONTRACT_ABI,
    VAULT_CONTRACT_ADDRESS,
    VAULT_CONTRACT_ABI
} from '../../contract-data/token-contract-data.js';

// outside alerter hook
import OutsideAlerter from "../hooks/OutsideAlerter";

// bignumber config
const BigNumber = require('bignumber.js');
BigNumber.config({ DECIMAL_PLACES: 2 });

export default function ProfileWindow(props) {

    const [userBalance, setUserBalance] = useState('');
    const [userRating, setUserRating] = useState('');
    const [userShareInRewards, setUserShareInRewards] = useState('');
    const [userExemptionQuota, setUserExemptionQuota] = useState('');

    const handleCloseButton = () => {
        props.toggleWindow();
    };

    useEffect(() => {
        if (props.authorised) {
            let web3 = new Web3(window.ethereum);
            let contract = new web3.eth.Contract(TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS);
            let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);

            contract.methods.balanceOf(props.account).call().then(function (result) {
                let bn = new BigNumber(web3.utils.fromWei(result)).div(1);
                setUserBalance(bn.toString());
            });

            contract.methods.getFeeExemptionQuotaOfAddress(props.account).call().then(function (result) {
                let bn = new BigNumber(web3.utils.fromWei(result)).div(1);
                setUserExemptionQuota(bn.toString());
            });

            contractVault.methods.getRatingValueByAddress(props.account).call().then(function (result) {
                let bn = new BigNumber(web3.utils.fromWei(result)).div(1);
                setUserRating(bn.toString());
            });

            contractVault.methods.getRewardSharePercentage(props.account).call().then(function (result) {
                let rewardShare = result / 10000000;
                if (rewardShare > 0 && rewardShare < 1 / 1000000) {
                    rewardShare = "<0.00001";
                }
                setUserShareInRewards(rewardShare);
            });
        }
    }, [props.authorised, props.account]);

    return (
        <div className="profile-pop-up-window-overlay">

            <div className="profile-pop-up-window">
                <OutsideAlerter closePopup={handleCloseButton}>
                    <span className="close" onClick={handleCloseButton}>
                        &times;
                    </span>
                    <div className="profile-pop-up-window-inner">
                        <div className="profile-pop-up-window-inner-border">
                            <img id="profile-puru-image" src={PuruImage4} alt="puru"></img>
                            <h2>{userBalance} <span className="pink-text">$PURU</span></h2>
                            <h3>Your rating:</h3>
                            <p>{userRating}</p>
                            <h3>Your share in rewards:</h3>
                            <p>{userShareInRewards}%</p>
                            <h3>Your exemption quota:</h3>
                            <p>{userExemptionQuota} <span className="pink-text">$PURU</span></p>
                        </div>
                    </div>
                </OutsideAlerter>
            </div>
        </div>
    );
}