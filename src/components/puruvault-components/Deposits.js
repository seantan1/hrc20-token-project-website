import './css/Deposits.css';
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Web3 from 'web3';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

import DepositBox from './DepositBox';

// import constants
import {
    TOKEN_CONTRACT_ADDRESS,
    TOKEN_CONTRACT_ABI,
    VAULT_CONTRACT_ADDRESS,
    VAULT_CONTRACT_ABI
} from '../../contract-data/token-contract-data.js';

import {
    HARMONY_MAIN_NET_BLOCK_EXPLORER_TX_URL
} from '../../contract-data/harmony-data.js';

const harmonyBlockExplorerUrl = HARMONY_MAIN_NET_BLOCK_EXPLORER_TX_URL;
const MIN_DEPOSIT_DURATION = 30;
const MAX_DEPOSIT_DURATION = 100;


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

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   }));

const Deposits = (props) => {

    const [depositAmount, setDepositAmount] = useState(0);
    // event handler for donation donorName form
    const depositAmountHandler = (event) => {
        setDepositAmount(event.target.value);
    }

    const [depositDuration, setDepositDuration] = useState(0);
    // event handler for donation donorName form
    const depositDurationHandler = (event) => {
        setDepositDuration(event.target.value);
    }

    // error alerts
    const [depositAmountError, setDepositAmountError] = useState(false);
    const [depositDurationError, setDepositDurationError] = useState(false);

    // user's allowance
    const [userAllowance, setUserAllowance] = useState(0);
    // user's token balance
    const [userTokenBalance, setUserTokenBalance] = useState(0);
    // user's deposit data
    // const [userDepositIds, setUserDepositIds] = useState();
    const [userDepositIds, setUserDepositIds] = useState([]);
    const [userDepositDataLoading, setUserDepositDataLoading] = useState(true);

    // // filter by All, Ready or In-progress
    // const [depositFilter, setDepositFilter] = useState('All');
    // // event handler for depositFilter
    // const depositFilterHandler = (event) => {
    //     setDepositFilter(event.target.value);
    //     if (props.authorised) {
    //         props.setRefreshData(true);
    //         setUserDepositDataLoading(true);
    //     }
    // }
    // <div className="deposit-filter-form-container">
    //                 <FormControl className="deposit-filter-form">
    //                     <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
    //                     <Select
    //                         labelId="demo-simple-select-label"
    //                         id="demo-simple-select"
    //                         value={depositFilter}
    //                         onChange={depositFilterHandler}
    //                     >
    //                         <MenuItem value={'All'}>All</MenuItem>
    //                         <MenuItem value={'Claimable'}>Claimable</MenuItem>
    //                         <MenuItem value={'In-progress'}>In-progress</MenuItem>
    //                     </Select>
    //                 </FormControl>
    //             </div>
    useEffect(() => {
        if (props.authorised) {
            let web3 = new Web3(window.ethereum);
            let contract = new web3.eth.Contract(TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS);
            let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);

            contract.methods.allowance(props.account, VAULT_CONTRACT_ADDRESS).call({
                from: props.account
            }).then(function (result) {
                setUserAllowance(web3.utils.fromWei(result));
            });

            contract.methods.balanceOf(props.account).call({
                from: props.account
            }).then(function (result) {
                setUserTokenBalance(web3.utils.fromWei(result));
            });

            contractVault.methods.getDepositsByOwner().call({
                from: props.account
            }).then(function (depositIdArray) {
                setUserDepositIds(depositIdArray);
                setUserDepositDataLoading(false);
                console.log("show this to puru");
                console.log(depositIdArray);
            });
            props.setRefreshData(false);
        }

    }, [props, props.authorised, props.account, userDepositDataLoading, props.refreshData]);

    const createDeposit = () => {
        // remove warnings on load
        setDepositAmountError(false);
        setDepositDurationError(false);

        // wallet authorised check, display wallet connection window if not authorised
        if (!props.authorised) {
            props.toggleWindow()
            return;
        }

        // amount check
        if (parseInt(depositAmount) <= 0 || !parseInt(depositAmount)) {
            setDepositAmountError(true);
            return;
        }
        // duration check
        if (parseInt(depositDuration) < MIN_DEPOSIT_DURATION || parseInt(depositDuration) > MAX_DEPOSIT_DURATION || !parseInt(depositDuration)) {
            setDepositDurationError(true);
            return;
        }

        let web3 = new Web3(window.ethereum);

        let contractVault = new web3.eth.Contract(VAULT_CONTRACT_ABI, VAULT_CONTRACT_ADDRESS);
        let amount_ether = web3.utils.toWei(depositAmount, 'ether');
        // console.log("hello");

        contractVault.methods.createDeposit(parseInt(depositDuration), amount_ether).send({
            from: props.account
        })
            // .then(function (result) {
            //     console.log(result); // DEBUG LOG
            //     props.setRefreshData(true);
            //     props.showAlert('Deposit success!', 'View transaction', "www.facebook.com", 'success');
            // });
            .on('transactionHash', function (hash) {
                // props.setTransactionPending(true);
                // console.log(hash);
                props.showAlert('Transaction pending', '', "", 'info');
            })
            .on('receipt', function (receipt) {
                // console.log(receipt['transactionHash']);
                // props.setTransactionPending(false);
                props.setRefreshData(true)
                props.showAlert('Deposit success!', 'View transaction', harmonyBlockExplorerUrl + receipt['transactionHash'], 'success');
            }).on('error', function (error) {
                props.showAlert('Deposit failed!', '', "", 'error');
            });

    }

    const increaseAllowance = () => {
        // wallet authorised check, display wallet connection window if not authorised
        if (!props.authorised) {
            props.toggleWindow();
            return;
        }

        let web3 = new Web3(window.ethereum);
        let contract = new web3.eth.Contract(TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS);
        // approve spend for 10 million purus so user don't have to approve again
        let amount_ether = web3.utils.toWei('10000000', 'ether');

        contract.methods.approve(VAULT_CONTRACT_ADDRESS, amount_ether).send({
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
                props.showAlert('Approved allowance', '', "", 'success');
            })
            .on('error', function (error) {
                props.showAlert('Approve failed!', '', "", 'error');
            });

        // .then(function (result) {
        //     console.log(result); // DEBUG LOG
        // });
    }

    return (
        <div className="deposits">
            <div className="deposits-container">

                {
                    userDepositIds.length === 0 ?
                        <p id="no-deposits-text">No deposits found.</p>
                        :
                        <div className="deposit-box-container">
                            {userDepositIds.map(mapping => (
                                <DepositBox key={mapping} authorised={props.authorised} depositId={mapping} account={props.account} refreshData={props.refreshData} setRefreshData={props.setRefreshData} setTransactionPending={props.setTransactionPending} toggleForfeitDepositWindowOpen={props.toggleForfeitDepositWindowOpen} showAlert={props.showAlert} />
                            ))}
                        </div>
                }
            </div>


            <div id="new-deposit" className="new-deposit-container">
                <h1>New Deposit</h1>
                {depositAmountError && <p className="deposit-form-text-warning">Please enter a valid amount.</p>}
                <div className="new-deposit-form-field-container">
                    <CssTextField className="new-deposit-form-field" label="Amount" type="number" variant="outlined" value={depositAmount} onChange={depositAmountHandler} />
                    <div className="new-deposit-form-field-container-max-text">
                        <span className="form-field-max-text" onClick={() => { setDepositAmount(userTokenBalance) }}>MAX</span>
                    </div>
                </div>
                <p>Balance: {userTokenBalance} PURU</p>
                <br></br>
                {depositDurationError && <p className="deposit-form-text-warning">Please enter a valid duration.</p>}
                <div className="new-deposit-form-field-container">
                    <CssTextField className="new-deposit-form-field" label="Duration (days)" type="number" variant="outlined" value={depositDuration} onChange={depositDurationHandler} />
                    <div className="new-deposit-form-field-container-max-text">
                        <span className="form-field-max-text" onClick={() => { setDepositDuration(MAX_DEPOSIT_DURATION) }}>MAX</span>
                    </div>
                </div>
                <p>Min: {MIN_DEPOSIT_DURATION} days | Max: {MAX_DEPOSIT_DURATION} days</p>

                {(parseInt(depositAmount) > 0 && parseInt(userAllowance) < parseInt(depositAmount) && props.authorised) ?
                    <button className="deposit-claim-button" onClick={increaseAllowance}>Approve</button>
                    :
                    <button className="deposit-claim-button" onClick={createDeposit}>Deposit</button>

                }
            </div>
        </div>

    );
}

export default Deposits;
