import React from "react";
import './css/ForfeitDepositWindow.css';
import Web3 from 'web3';


// import constants
import {
    VAULT_CONTRACT_ADDRESS,
    VAULT_CONTRACT_ABI
} from '../../contract-data/token-contract-data.js';

// outside alerter hook
import OutsideAlerter from "../hooks/OutsideAlerter";

// bignumber config
const BigNumber = require('bignumber.js');
BigNumber.config({ DECIMAL_PLACES: 2 }) ;

export default function ForfeitDepositWindow(props) {

    const handleCloseButton = () => {
        props.toggleForfeitDepositWindowOpen();
    }

    const forfeitDeposit = () => {
        if (props.authorised) {
            let web3 = new Web3(window.ethereum);
            let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);
            contractVault.methods.forfeitDeposit(props.forfeitDepositId).send({
                from: props.account
            })
            .on('transactionHash', function(hash){
                props.setTransactionPending(true);
                handleCloseButton();
            })
            .on('receipt', function(receipt){
                // console.log(confirmationNumber);
                console.log(receipt);
                props.showAlert('Forfeit Deposit success!', 'View transaction', "www.facebook.com", 'success');
                props.setTransactionPending(false);
                props.setRefreshData(true)
            })
        }
    }

    return (
        <div className="forfeit-pop-up-window-overlay">
            <div className="forfeit-pop-up-window">
                <OutsideAlerter  closePopup={handleCloseButton}>
                <span className="close" onClick={handleCloseButton}>
                    &times;
                </span>
                <div className="forfeit-pop-up-window-inner">
                    <div className="forfeit-pop-up-window-inner-border">
                        <h3>Deposit ID: {props.forfeitDepositId}</h3>
                        <p>This deposit is still not ready to be claimed!</p>
                        <p>For maximum rewards, please wait until the end of the lock duration.</p>
                        <p>If you wish to forfeit this deposit, please be reminded that you will only <span className="red-text">receive 50% of your initial deposit</span> back. 
                        Any credits earned from this deposit will also be taken away. </p>
                    </div>
                    <div className="forfeit-pop-up-window-button-container">
                        <button className="forfeit-pop-up-window-go-back-button" onClick={handleCloseButton}>Go back</button>
                        <button className="forfeit-pop-up-window-forfeit-button" onClick={forfeitDeposit}>Forfeit and lose 50%</button>
                    </div>

                </div>
                </OutsideAlerter>
            </div>
        </div>
    );
}