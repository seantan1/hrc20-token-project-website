import React, { useState } from 'react';
import './css/Deposits.css';
import Web3 from 'web3';

// import constants
// import {
//     TOKEN_CONTRACT_ADDRESS,
//     TOKEN_CONTRACT_ABI,
//     VAULT_CONTRACT_ADDRESS,
//     VAULT_CONTRACT_ABI
// } from '../../contract-data/token-contract-data.js';


const DepositBoxInfo = async (props) => {

    const [depositBoxInfoLoading, setDepositBoxInfoLoading] = useState(true);
    // const [amount, setAmount] = useState('');
    // const [timeLeft, setTimeLeft] = useState('');

    // await props.contractVault.methods.getDepositById(props.despositId).call().then(function (result) {
    //     setAmount(result[1]);
    //     setTimeLeft(result[0]);
    // });

    return (
        <div>
            {depositBoxInfoLoading ?
                <p>Loading..</p>
                :
                <div className="deposit-box-info">
                    <p className="deposit-id-text">ID: {props.despositId}</p>
                    <h2>{} <span className="puru-text">$PURU</span></h2>
                    <h3>Remaining Time:</h3>
                    <p>{}</p>
                    <p className="deposit-ready-to-claim-text">Ready To Claim!</p>
                    <h3>Rating & Credits earned:</h3>
                    <p>1500</p>
                    <button className="deposit-claim-button">Claim</button>
                </div>
            }
        </div>
    );
}

export default DepositBoxInfo;

