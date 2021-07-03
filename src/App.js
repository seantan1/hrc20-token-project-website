import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import detectEthereumProvider from '@metamask/detect-provider';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

// component imports
// global
import Navbar from './components/navbar-components/Navbar';
import Footer from './components/footer-components/Footer';
import NavlinksWindow from './components/navbar-components/NavlinksWindow';
import WalletProviderWindow from './components/navbar-components/WalletProviderWindow';
import ProfileWindow from './components/navbar-components/ProfileWindow';

// home
import HomeBanner from './components/home-components/Banner';
import Tokenomics from './components/home-components/Tokenomics';
import TokenStatistics from './components/home-components/TokenStatistics';
import FutureProjects from './components/home-components/FutureProjects';

// puruVault
import Deposits from './components/puruvault-components/Deposits';
import VaultBanner from './components/puruvault-components/Banner';
import ForfeitDepositWindow from './components/puruvault-components/ForfeitDepositWindow';

// credits store
import CreditsStoreBanner from './components/credits-store-components/Banner';
// bounty
import Bounty from './components/bounty-components/Bounty';
// info
import Info from './components/info-components/Info';

// temp notice
import TempNotice from './components/temporary-site-notices/Notice';

// harmony data
// main net
import {
    HARMONY_MAIN_NET_VERSION,
    HARMONY_MAINNET_DATA,
    HARMONY_MAIN_NET_BLOCK_EXPLORER_TX_URL,
    HARMONY_MAIN_NET_RPC_URL
} from './contract-data/harmony-data.js';
// test net
// import {
//     HARMONY_TEST_NET_VERSION,
//     HARMONY_TESTNET_DATA,
//     HARMONY_TEST_NET_BLOCK_EXPLORER_TX_URL,
//     HARMONY_TEST_NET_RPC_URL
// } from './contract-data/harmony-data.js';

// main net
const harmonyNetVersion = HARMONY_MAIN_NET_VERSION;
const harmonyNetData = HARMONY_MAINNET_DATA;
// eslint-disable-next-line
const harmonyBlockExplorerUrl = HARMONY_MAIN_NET_BLOCK_EXPLORER_TX_URL;
// eslint-disable-next-line
const harmonyRpcUrl = HARMONY_MAIN_NET_RPC_URL;

// test net
// const harmonyNetVersion = HARMONY_TEST_NET_VERSION;
// const harmonyNetData = HARMONY_TESTNET_DATA;
// const harmonyBlockExplorerUrl = HARMONY_TEST_NET_BLOCK_EXPLORER_TX_URL;
// const harmonyRpcUrl = HARMONY_TEST_NET_RPC_URL;

function App() {
    // load once
    const [loadOnce, setLoadOnce] = useState(false);
    /* user's wallet account useStates
        account: user's account address 0x... or one....
        authorised: has user authorised/signed-in a wallet
        walletType: wallet type - metamask, onewallet
    */
    const [account, setAccount] = useState('');
    const handleAccount = (input_account) => {
        setAccount(input_account);
        localStorage.setItem( 'account', input_account );
    }
    const [authorised, setAuthorised] = useState(false);
    const handleAuthorised = (input_authorised) => {
        if (input_authorised) {
            setAuthorised(true);
            localStorage.setItem( 'authorised', "true" );
        }
        else {
            setAuthorised(false);
            localStorage.setItem( 'authorised', "false" );
        }
    }
    const [alert, setAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertLink, setAlertLink] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("");

    const [refreshData, setRefreshData] = useState(false);
    const [transactionPending, setTransactionPending] = useState(false);

    // use to toggle the navlinks window
    const [navlinksWindowOpen, setNavlinksWindowOpen] = useState(false);
    const toggleNavlinksWindow = () => {
        setNavlinksWindowOpen(!navlinksWindowOpen);
    };

    // use to toggle the wallet provider window
    const [walletWindowOpen, setwalletWindowOpen] = useState(false);
    // toggle wallet provider window handler
    const toggleWalletWindow = () => {
        setwalletWindowOpen(!walletWindowOpen);
    };

    // use to toggle the profile window
    const [profileWindowOpen, setProfileWindowOpen] = useState(false);
    const toggleProfileWindow = () => {
        setProfileWindowOpen(!profileWindowOpen);
    };

    //use to toggle the forfeit deposit window
    const [forfeitDepositWindowOpen, setForfeitDepositWindowOpen] = useState(false);
    const [forfeitDepositId, setForfeitDepositId] = useState(false);
    const toggleForfeitDepositWindowOpen = (id) => {
        setForfeitDepositWindowOpen(!forfeitDepositWindowOpen);
        setForfeitDepositId(id);
    };

    const showAlert = (title, message, link, severity) => {
        setAlertTitle(title);
        setAlertMessage(message);
        setAlertLink(link);
        setAlertSeverity(severity);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 5000);
    }

    const signInOneWallet = async () => {


    }

    // metamask accounts change handler
    const handleAccountsChanged = accounts => {
        if (accounts.length === 0) {
            // console.error('Not found accounts');
        } else {
            handleAccount(accounts[0]);
            // console.log('walletType: ' + walletType + ' addres: ' + account);
        }
    };

    // metamask sign in handler
    const signInMetamask = async () => {
        const provider = await detectEthereumProvider();

        // @ts-ignore
        if (provider !== window.ethereum) {
            // console.error('Do you have multiple wallets installed?');
        }

        if (!provider) {
            // console.error('Metamask not found');
            // error pop up
            showAlert('Metamask extension not found.','Install metamask', "https://metamask.io/", 'error');
            return;
        }

        // MetaMask events
        provider.on('accountsChanged', handleAccountsChanged);

        provider.on('disconnect', () => {
            // console.log('disconnect');
            handleAuthorised(false);
            handleAccount('');

        });

        provider.on('chainIdChanged', (chainId) => {
            // console.log('chainIdChanged', chainId);
            handleAuthorised(false);
            handleAccount('');
        });

        // detect Network account change
        provider.on('networkChanged', (networkId) => {
            // console.log('networkChanged', networkId);
            if (window.ethereum.networkVersion !== harmonyNetVersion) {
                handleAuthorised(false);
                handleAccount('');
            }
        });

        if (window.ethereum.networkVersion !== harmonyNetVersion) {
            const data = harmonyNetData;
            await window.ethereum.request({ method: 'wallet_addEthereumChain', params: data });
        }

        attemptMetamaskConnection(provider);
    };

    // metamask attempt connection function
    const attemptMetamaskConnection = (provider) => {
        provider.request({ method: 'eth_requestAccounts' })
            .then(async params => {
                handleAccountsChanged(params);
                handleAuthorised(true);
            })
            .catch(err => {
                handleAuthorised(false);

                if (err.code === 4001) {
                    // console.error('Please connect to MetaMask.');
                } else {
                    // console.error(err);
                }
            });
    }

    // attempt to fetch credentials from local storage
    useEffect(() => {
        if (!loadOnce) {
            if (localStorage.getItem( 'account' ) && localStorage.getItem( 'authorised')) {
                signInMetamask();
            }
            // handleAccount(localStorage.getItem( 'account' ) || '');
            // if (localStorage.getItem( 'authorised') === 'true') {
            //     handleAuthorised(true);
            // }
            // else {
            //     handleAuthorised(false);
            // }
            setLoadOnce(true);
        }
    });

    return (
        <div className="App">
            {profileWindowOpen && <ProfileWindow authorised={authorised} account={account} toggleWindow={toggleProfileWindow}/>}
            {walletWindowOpen && <WalletProviderWindow toggleWindow={toggleWalletWindow} signInMetamask={signInMetamask} signInOneWallet={signInOneWallet} />}
            {forfeitDepositWindowOpen && <ForfeitDepositWindow authorised={authorised} account={account} toggleForfeitDepositWindowOpen={toggleForfeitDepositWindowOpen} forfeitDepositId={forfeitDepositId} setTransactionPending={setTransactionPending} showAlert={showAlert} setRefreshData={setRefreshData}/>}
            {navlinksWindowOpen && <NavlinksWindow toggleWindow={toggleNavlinksWindow} toggleProfileWindow={toggleProfileWindow}/>}
            <div className="page-content-container">
                <div className="sticky-navbar">
                    <Navbar authorised={authorised} account={account} toggleNavlinksWindow={toggleNavlinksWindow} toggleWalletWindow={toggleWalletWindow} toggleProfileWindow={toggleProfileWindow} transactionPending={transactionPending} />
                    {alert && <Alert className="tx-alert" severity={alertSeverity} onClose={() => setAlert(false)}><AlertTitle>{alertTitle}</AlertTitle><a href={alertLink} target="_blank" rel="noreferrer">{alertMessage}</a></Alert>}
                </div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'>
                            <HomeBanner />
                            <TempNotice />
                            <TokenStatistics authorised={authorised} />
                            <Tokenomics />
                            <FutureProjects />
                        </Route>
                        <Route exact path='/vault'>
                            <VaultBanner account={account} authorised={authorised} refreshData={refreshData} setRefreshData={setRefreshData} />
                            <Deposits account={account} authorised={authorised} toggleWindow={toggleWalletWindow} refreshData={refreshData} setRefreshData={setRefreshData} setTransactionPending={setTransactionPending} showAlert={showAlert} toggleForfeitDepositWindowOpen={toggleForfeitDepositWindowOpen}/>
                        </Route>
                        <Route exact path='/credits-store'>
                            <CreditsStoreBanner authorised={authorised} account={account} />
                        </Route>
                        <Route exact path='/bounty'>
                            <Bounty authorised={authorised} account={account} toggleWindow={toggleWalletWindow} setTransactionPending={setTransactionPending} refreshData={refreshData} setRefreshData={setRefreshData} showAlert={showAlert} />
                        </Route>
                        <Route exact path='/info'>
                            <Info />
                        </Route>
                        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        </div>
    );
}

export default App;
