import React, { useState, useEffect } from 'react';
import './css/TokenStatistics.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
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

const TokenStatistics = (props) => {

    const [totalLocked, setTotalLocked] = useState('');
    const [totalDistributedRewards, setTotalDistributedRewards] = useState('');

    useEffect(() => {
        if (props.authorised) {
            let web3 = new Web3(window.ethereum);
            let contract = new web3.eth.Contract(TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS);
            let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);

            contractVault.methods.getLockedSupply().call().then(function (result) {
                let bn = new BigNumber(web3.utils.fromWei(result)).div(1);
                setTotalLocked(bn.toString());
            });

            contractVault.methods.getTotalDistributedRewards().call().then(function (result) {
                let bn = new BigNumber(web3.utils.fromWei(result)).div(1);
                setTotalDistributedRewards(bn.toString());
            });

            

        }
    }, [props.authorised]);

    return (
        <div className="token-stats">
            <div className="stats-section">
                <div className="stats-section-inner-frame">
                    <div className="stats-section-inner-frame-inner">
                        <div className="stats-container">
                            <h1>Unique Holders</h1>
                            <p>1,306</p>
                        </div>
                        <div className="stats-container">
                            <h1>Locked in Vault</h1>
                            <p>{totalLocked} tokens</p>
                        </div>
                        <div className="stats-container">
                            <h1>Distributed rewards</h1>
                            <p>{totalDistributedRewards} tokens</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TokenStatistics;
