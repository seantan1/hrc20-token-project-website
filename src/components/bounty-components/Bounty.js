import React, { useState, useEffect } from 'react';
import './css/Bounty.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import PuruImage3 from "../../assets/white/3.png";
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
BigNumber.config({ DECIMAL_PLACES: 2 });

const Bounty = (props) => {

    // const [totalRewards, setTotalRewards] = useState('');
    const [totalBounty, setTotalBounty] = useState('');

    useEffect(() => {
        if (props.authorised) {
            console.log("called");
            let web3 = new Web3(window.ethereum);
            let contract = new web3.eth.Contract(TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS);
            // let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);

            contract.methods.getDispensableRewards().call().then(function (result) {
                let bn = new BigNumber(web3.utils.fromWei(result)).div(1);
                // setTotalRewards(bn.toString());
                let bn_bounty = bn.div(1000);
                setTotalBounty(bn_bounty.toString());
                props.setRefreshData(false);
            });

            // event listener
            contract.events.SlashFeeCollected()
                .on("data", function (event) {
                    // console.log(event.returnValues);
                    props.setRefreshData(true);
                });
        }
    }, [props.authorised, props.refreshData, props]);

    const claimBounty = () => {
        // wallet authorised check, display wallet connection window if not authorised
        if (!props.authorised) {
            props.toggleWindow()
            return;
        }

        let web3 = new Web3(window.ethereum);
        let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);

        contractVault.methods.distributeRewards().send({
            from: props.account
        })
            .on('transactionHash', function (hash) {
                props.setTransactionPending(true);
                // console.log(hash);
            })
            .on('receipt', function (receipt) {
                // console.log(confirmationNumber);
                console.log(receipt);
                props.setTransactionPending(false);
                props.setRefreshData(true)
                props.showAlert('Claim Bounty success!', 'View transaction', "www.facebook.com", 'success');
            }).on('error', function (error) {
                props.showAlert('Claim Bounty failed!', '', "", 'error');
            });
    }

    return (
        <div>
            <div className="bounty">
                <div className="bounty-image-container">
                    <img className="bounty-image" src={PuruImage3} alt="puru"></img>
                </div>
                <div className="bounty-text">
                    <h1><span className="bounty-text-highlight">CURRENT BOUNTY</span></h1>
                    <p>{totalBounty} <span className="pink-text">$PURU</span></p>
                    <button className="bounty-claim-button" onClick={claimBounty}>Claim now</button>
                </div>

            </div>
            <div className="bounty-info-container">
                <h1>What is the bounty?</h1>
                <p>
                    All slash fees are accumulated into the reward pool waiting to be distributed
                    to all entitled users who staked in the $PURU Vault. By claiming the bounty,
                    you are paying the network fee required for the rewards distribution. In return
                    for the hardwork, you will be rewarded with $PURU for your contribution!
                </p>
                <p>
                    Puru has made it so that the bounty reward updates automatically everytime a slash fee is 
                    collected to the pool, how cool is that!
                </p>
                <p>
                    Keep in mind that there might potentially be other users fighting for the bounty
                    as well, and make sure that the reward is worth the network fee you are paying for!
                </p>
            </div>
        </div>


    );
}

export default Bounty;
