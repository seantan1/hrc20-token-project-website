import React, { useState, useEffect } from 'react';
import './css/Deposits.css';
import Web3 from 'web3';

// import constants
import {
    TOKEN_CONTRACT_ADDRESS,
    TOKEN_CONTRACT_ABI,
    VAULT_CONTRACT_ADDRESS,
    VAULT_CONTRACT_ABI
} from '../../contract-data/token-contract-data.js';

const DepositBox = (props) => {

    const [amount, setAmount] = useState('');
    const [timeLeft, setTimeLeft] = useState('');
    const [timeLeftInEpoch, setTimeLeftInEpoch] = useState(0);

    function secondsToDhms(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        // var s = Math.floor(seconds % 60);
        
        var dDisplay = d > 0 ? d + (d === 1 ? " day " : " days ") : "";
        var hDisplay = h > 0 ? h + (h === 1 ? " hour " : " hours ") : "";
        var mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes ") : "";
        // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        // return dDisplay + hDisplay + mDisplay + sDisplay;
        return dDisplay + hDisplay + mDisplay;
        }

    useEffect(() => {
        if (props.authorised) {
            let web3 = new Web3(window.ethereum);
            let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);
            contractVault.methods.getDepositById(props.depositId).call().then(function (result) {
                setAmount(web3.utils.fromWei(result[2]));
                let diff = result[0] - Math.floor(Date.now() / 1000);
                setTimeLeft(secondsToDhms(diff));
                setTimeLeftInEpoch(parseInt(diff));
                console.log(timeLeftInEpoch);
            });
        }
    }, [props.authorised]);

    const claimDeposit = () => {
        if (props.authorised) {
            let web3 = new Web3(window.ethereum);
            let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);
            contractVault.methods.claimDeposit((props.depositId)).send({
                from: props.account
            }).then(function (result) {
                console.log(result); // DEBUG LOG
                
            });
        }
    }

    return (
        <div className="deposit-box">
            <p className="deposit-id-text">ID: {props.depositId}</p>
            <h2>{amount} <span className="puru-text">$PURU</span></h2>
            <h3>Remaining Time:</h3>
            {timeLeft ? <p>{timeLeft}</p> : <p className="deposit-ready-to-claim-text">Ready To Claim!</p>}
            <h3>Rating & Credits earned:</h3>
            <p>1500</p>
            <button className="deposit-claim-button" onClick={claimDeposit}>Claim</button>
        </div>
    );
}

export default DepositBox;

