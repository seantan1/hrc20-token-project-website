import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import Alert from '@material-ui/lab/Alert';

// component imports
// global
import Navbar from './components/navbar-components/Navbar';
import Footer from './components/footer-components/Footer';

// home
import HomeBanner from './components/home-components/Banner';
import Tokenomics from './components/home-components/Tokenomics';
import TokenStatistics from './components/home-components/TokenStatistics';
import FutureProjects from './components/home-components/FutureProjects';
import WalletProviderWindow from './components/navbar-components/WalletProviderWindow';

// puruVault
import Deposits from './components/puruvault-components/Deposits';
import VaultBanner from './components/puruvault-components/Banner';

// credits store
import CreditsStoreBanner from './components/credits-store-components/Banner';

function App() {
    /* user's wallet account useStates
        account: user's account address 0x... or one....
        authorised: has user authorised/signed-in a wallet
        walletType: wallet type - metamask, onewallet
    */
    const [account, setAccount] = useState('');
    const [authorised, setAuthorised] = useState(false);
    const [walletType, setwalletType] = useState('');
    const [errorAlert, setErrorAlert] = useState(false);
    const [errorAlertMessage, setErrorAlertMessage] = useState("");

    const [refreshData, setRefreshData] = useState(false);
    const [transactionPending, setTransactionPending] = useState(false);

    // use to toggle the wallet provider window
    const [walletWindowOpen, setwalletWindowOpen] = useState(false);
    // toggle wallet provider window handler
    const toggleWalletWindow = () => {
        setwalletWindowOpen(!walletWindowOpen);
    };

    useEffect(() => {
        if(!authorised) {
            signInMetamask();
        }
    }, [authorised]);

    const signInOneWallet = async () => {


    }

    // metamask accounts change handler
    const handleAccountsChanged = accounts => {
        if (accounts.length === 0) {
            // console.error('Not found accounts');
        } else {
            setAccount(accounts[0]);
            setwalletType('metamask');
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
            setErrorAlert(true);
            setErrorAlertMessage('Metamask extension not found.');
            return;
        }

        // MetaMask events
        provider.on('accountsChanged', handleAccountsChanged);

        provider.on('disconnect', () => {
            // console.log('disconnect');
            setAuthorised(false);
            setAccount('');
            attemptMetamaskConnection(provider);

        });

        provider.on('chainIdChanged', (chainId) => {
            // console.log('chainIdChanged', chainId);
            setAuthorised(false);
            setAccount('');
        });

        // detect Network account change
        provider.on('networkChanged', (networkId) => {
            // console.log('networkChanged', networkId);
            // if (window.ethereum.networkVersion !== harmonyNetVersion) {
            //     setAuthorised(false);
            //     setAccount('');
            // }
        });

        // if (window.ethereum.networkVersion !== harmonyNetVersion) {
        //     const data = harmonyNetData;
        //     await window.ethereum.request({ method: 'wallet_addEthereumChain', params: data });
        // }

        attemptMetamaskConnection(provider);
    };

    // metamask attempt connection function
    const attemptMetamaskConnection = (provider) => {
        provider.request({ method: 'eth_requestAccounts' })
            .then(async params => {
                handleAccountsChanged(params);
                setAuthorised(true);
            })
            .catch(err => {
                setAuthorised(false);

                if (err.code === 4001) {
                    // console.error('Please connect to MetaMask.');
                } else {
                    // console.error(err);
                }
            });
    }

    return (
        <div className="App">
            {walletWindowOpen && <WalletProviderWindow toggleWindow={toggleWalletWindow} signInMetamask={signInMetamask} signInOneWallet={signInOneWallet} />}
            <div className="page-content-container">
                <div className="sticky-navbar">
                    <Navbar authorised={authorised} account={account} toggleWalletWindow={toggleWalletWindow} transactionPending={transactionPending}/>
                </div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'>
                            <HomeBanner />
                            <TokenStatistics authorised={authorised} />
                            <Tokenomics />
                            <FutureProjects />
                        </Route>
                        <Route exact path='/vault'>
                            <VaultBanner account={account} authorised={authorised} refreshData={refreshData} />
                            <Deposits account={account} authorised={authorised} toggleWindow={toggleWalletWindow} refreshData={refreshData} setRefreshData={setRefreshData} setTransactionPending={setTransactionPending}/>
                        </Route>
                        <Route exact path='/credits-store'>
                            <CreditsStoreBanner />
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
