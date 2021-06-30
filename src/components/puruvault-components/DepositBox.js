import React, { useState } from 'react';
import './css/Deposits.css';
import Web3 from 'web3';

// import constants
import {
    TOKEN_CONTRACT_ADDRESS,
    TOKEN_CONTRACT_ABI,
    VAULT_CONTRACT_ADDRESS,
    VAULT_CONTRACT_ABI
} from '../../contract-data/token-contract-data.js';

import DepositBoxInfo from './DepositBoxInfo';


const DepositBox = (props) => {

    const web3 = new Web3(window.ethereum);
    const contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);
    console.log("depositbox");
    console.log(props.userDepositIds);
    return (
        <div>
            {
                props.userDepositIds.map(function (item, i) {
                    <DepositBoxInfo contractVault={contractVault} despositId={item} />
                })
            }
        </div>
    );
}

export default DepositBox;

