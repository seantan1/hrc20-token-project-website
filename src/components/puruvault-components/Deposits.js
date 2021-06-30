import './css/Deposits.css';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Web3 from 'web3';

// import constants
import {
    TOKEN_CONTRACT_ADDRESS,
    TOKEN_CONTRACT_ABI,
    VAULT_CONTRACT_ADDRESS,
    VAULT_CONTRACT_ABI
} from '../../contract-data/token-contract-data.js';

// CssTextField
const CssTextField = withStyles({
    root: {
        "& input": {
            color: "black"
        },
        "& label": {
            color: "#b3b3b3"
        },
        "&:hover label": {
            color: "black"
        },
        "& label.Mui-focused": {
            color: "black"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#b3b3b3"
            },
            "&:hover fieldset": {
                borderColor: "black"
            },
            "&.Mui-focused fieldset": {
                borderColor: "black"
            }
        }
    }
})(TextField);

const Deposits = (props) => {

    const [depositAmount, setDepositAmount] = useState('');
    // event handler for donation donorName form
    const depositAmountHandler = (event) => {
        setDepositAmount(event.target.value);
    }

    const [depositDays, setDepositDays] = useState('');
    // event handler for donation donorName form
    const depositDaysHandler = (event) => {
        setDepositDays(event.target.value);
    }

    const createDeposit = (amount, duration) => {
        let web3 = new Web3(window.ethereum);
        let contract = new web3.eth.Contract(TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS);

        let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);

        contractVault.methods.createDeposit(31, amount).send({
            from: props.account
        }).then(function(result) {
            console.log(result);
        });
    }


    return (
        <div className="deposits">
            <div className="deposit-box-container">
                <div className="deposit-box">
                    <p className="deposit-id-text">ID: 344729</p>
                    <h2>1000000 <span className="puru-text">$PURU</span></h2>
                    <h3>Remaining Time:</h3>
                    <p>29 days 10 hours 54 minutes</p>
                    <p className="deposit-ready-to-claim-text">Ready To Claim!</p>
                    <h3>Rating & Credits earned:</h3>
                    <p>1500</p>
                    <button className="deposit-claim-button">Claim</button>
                </div>
                <div className="deposit-box">
                    <p className="deposit-id-text">ID: 344729</p>
                    <h2>150 <span className="puru-text">$PURU</span></h2>
                    <h3>Remaining Time:</h3>
                    <p>29 days 10 hours 54 minutes</p>
                    <p className="deposit-ready-to-claim-text">Ready To Claim!</p>
                    <h3>Rating & Credits earned:</h3>
                    <p>1500</p>
                    <button className="deposit-claim-button">Claim</button>
                </div>
                <div className="deposit-box">
                    <p className="deposit-id-text">ID: 344729</p>
                    <h2>150 <span className="puru-text">$PURU</span></h2>
                    <h3>Remaining Time:</h3>
                    <p>29 days 10 hours 54 minutes</p>
                    <p className="deposit-ready-to-claim-text">Ready To Claim!</p>
                    <h3>Rating & Credits earned:</h3>
                    <p>1500</p>
                    <button className="deposit-claim-button">Claim</button>
                </div>
                <div className="deposit-box">
                    <p className="deposit-id-text">ID: 344729</p>
                    <h2>150 <span className="puru-text">$PURU</span></h2>
                    <h3>Remaining Time:</h3>
                    <p>29 days 10 hours 54 minutes</p>
                    <p className="deposit-ready-to-claim-text">Ready To Claim!</p>
                    <h3>Rating & Credits earned:</h3>
                    <p>1500</p>
                    <button className="deposit-claim-button">Claim</button>
                </div>
            </div>
            <div id="new-deposit" className="new-deposit-container">
                <h1>New Deposit</h1>
                <div className="new-deposit-form-field-container">
                    <CssTextField className="new-deposit-form-field" label="Amount" variant="outlined" onChange={depositAmountHandler} />
                    <div className="new-deposit-form-field-container-max-text">
                        <span>MAX</span>
                    </div>
                </div>
                <p>Balance: 1000 PURU</p>
                <br></br>
                <div className="new-deposit-form-field-container">
                    <CssTextField className="new-deposit-form-field" label="Duration (days)" variant="outlined" onChange={depositDaysHandler} />
                    <div className="new-deposit-form-field-container-max-text">
                        <span>MAX</span>
                    </div>
                </div>
                <p>Min: 30 days | Max: 180 days</p>
                <button className="deposit-claim-button">Deposit</button>
            </div>
        </div>

    );
}

export default Deposits;
