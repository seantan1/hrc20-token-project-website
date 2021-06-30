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


const DepositBox = (props) => {

    const [result1, setResult1] = useState([]);
    let web3 = new Web3(window.ethereum);
    let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);

    // contractVault.methods.getDepositById(0).call().then(function (result) {
    //     console.log(result);
    //     setArray(result);
    //     console.log(array);
    // });

    return (
        <div id="helo">
            {
                props.userDepositIds.map(function (item, i) {
                    contractVault.methods.getDepositById(item).call().then(function (result) {
                        setResult1(result);
                        return [
                            <div key={i} className="deposit-box">
                                <p className="deposit-id-text">ID: {item}</p>
                                <h2>{result[1]} <span className="puru-text">$PURU</span></h2>
                                <h3>Remaining Time:</h3>
                                <p>{ }</p>
                                <p className="deposit-ready-to-claim-text">Ready To Claim!</p>
                                <h3>Rating & Credits earned:</h3>
                                <p>1500</p>
                                <button className="deposit-claim-button">Claim</button>
                            </div>
                        ];
                    });
                    // return [
                    //     <div key={i} className="deposit-box">
                    //         <p className="deposit-id-text">ID: {item}</p>
                    //         <h2>{result1[1]} <span className="puru-text">$PURU</span></h2>
                    //         <h3>Remaining Time:</h3>
                    //         <p>{ }</p>
                    //         <p className="deposit-ready-to-claim-text">Ready To Claim!</p>
                    //         <h3>Rating & Credits earned:</h3>
                    //         <p>1500</p>
                    //         <button className="deposit-claim-button">Claim</button>
                    //     </div>
                    // ];
                })
            }
        </div>
    );
}

export default DepositBox;
