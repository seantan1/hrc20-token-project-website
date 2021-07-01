import React, { useState, useEffect } from 'react';
import './css/Banner.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import PuruImage1 from "../../assets/white/1.png";
import Web3 from 'web3';

// import constants
import {
    TOKEN_CONTRACT_ADDRESS,
    TOKEN_CONTRACT_ABI,
    VAULT_CONTRACT_ADDRESS,
    VAULT_CONTRACT_ABI
} from '../../contract-data/token-contract-data.js';

// bignumber config
const BigNumber = require('bignumber.js');
BigNumber.config({ DECIMAL_PLACES: 2 }) ;

const Banner = (props) => {

    const [totalCredits, setTotalCredits] = useState('');

    useEffect(() => {
        if (props.authorised) {
            let web3 = new Web3(window.ethereum);
            let contract = new web3.eth.Contract(TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS);
            let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);

            contractVault.methods.getCredits().call({
                from: props.account
            }).then(function (result) {
                let bn = new BigNumber(web3.utils.fromWei(result)).div(1);
                setTotalCredits(bn.toString());
            });
        }
    }, [props.authorised]);

    return (
        <div className="credits-store-banner">
           <div className="credits-store-banner-image-container">
                <img className="credits-store-banner-image" src={PuruImage1}></img>
                <p>Your total credits: {totalCredits}</p>
           </div>
           <div className="credits-store-banner-text">
                <h1><span className="credits-store-banner-text-highlight">COMING SOON!</span></h1>
                <p>Estimate Completion: 1st August 2021</p>
                
           </div>
        </div>

    );
}

export default Banner;
