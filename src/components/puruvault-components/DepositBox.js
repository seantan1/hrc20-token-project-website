import React, { useState, useEffect } from 'react';
import './css/Deposits.css';
import Web3 from 'web3';


// import constants
import {
    VAULT_CONTRACT_ADDRESS,
    VAULT_CONTRACT_ABI
} from '../../contract-data/token-contract-data.js';

import {
    HARMONY_MAIN_NET_BLOCK_EXPLORER_TX_URL
} from '../../contract-data/harmony-data.js';

const harmonyBlockExplorerUrl = HARMONY_MAIN_NET_BLOCK_EXPLORER_TX_URL;

// bignumber config
const BigNumber = require('bignumber.js');
BigNumber.config({ DECIMAL_PLACES: 2 }) ;

const DepositBox = (props) => {

    const [amount, setAmount] = useState('');
    const [rating, setRating] = useState('');
    const [timeLeft, setTimeLeft] = useState('');
    const [timeLeftInEpoch, setTimeLeftInEpoch] = useState(0);

    function secondsToDhms(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        
        var dDisplay = d > 0 ? d + (d === 1 ? " day " : " days ") : "";
        var hDisplay = h > 0 ? h + (h === 1 ? " hr " : " hrs ") : "";
        var mDisplay = m > 0 ? m + (m === 1 ? " min " : " mins ") : "";
        var sDisplay = s > 0 ? s + (s === 1 ? " s" : " s") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
        // return dDisplay + hDisplay + mDisplay;
        }

    useEffect(() => {
        if (props.authorised) {
            let web3 = new Web3(window.ethereum);
            let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);
            contractVault.methods.getDepositById(props.depositId).call().then(function (result) {
                let bn1 = new BigNumber(web3.utils.fromWei(result[2])).div(1);
                setAmount(bn1.toString());
                let bn2 = new BigNumber(web3.utils.fromWei(result[3])).div(1);
                setRating(bn2.toString());
                // setAmount(web3.utils.fromWei(result[2]));
                // setRating(web3.utils.fromWei(result[3]));
                let diff = result[0] - Math.floor(Date.now() / 1000);
                setTimeLeft(secondsToDhms(diff));
                setTimeLeftInEpoch(parseInt(diff));
            });
        }
    }, [props.authorised,props.depositId,timeLeftInEpoch, props.refreshData]);

    const claimDeposit = () => {
        if (props.authorised) {
            let web3 = new Web3(window.ethereum);
            let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);
            contractVault.methods.claimDeposit((props.depositId)).send({
                from: props.account
            })
            .on('transactionHash', function(hash){
                // props.setTransactionPending(true);
                // console.log(hash);
                props.showAlert('Transaction pending', '', "", 'info');
            })
            .on('receipt', function(receipt){
                // console.log(confirmationNumber);
                // console.log(receipt);
                props.showAlert('Claim success!', 'View transaction', harmonyBlockExplorerUrl+receipt['transactionHash'], 'success');
                // props.setTransactionPending(false);
                props.setRefreshData(true)
            })
            // .then(function (result) {
            //     console.log(result); // DEBUG LOG
            //     props.setRefreshData(true);
            // });
        }
    }

    return (
        <div className="deposit-box">
            <p className="deposit-id-text">ID: {props.depositId}</p>
            <h2>{amount} <span className="puru-text">$PURU</span></h2>
            <h3>Remaining Time:</h3>
            {timeLeft ? <p>{timeLeft}</p> : <p className="deposit-ready-to-claim-text">Ready To Claim!</p>}
            <h3>Rating & Credits earned:</h3>
            <p>{rating}</p>
            {timeLeft ? 
                <button className="deposit-claim-button" onClick={() => props.toggleForfeitDepositWindowOpen(props.depositId)}>Forfeit</button> 
                : 
                <button className="deposit-claim-button" onClick={claimDeposit}>Claim</button>
            }
            
            
        </div>
    );
}

export default DepositBox;

