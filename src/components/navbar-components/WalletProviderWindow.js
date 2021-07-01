import React from "react";
import './css/WalletProviderWindow.css';

// import icons
import MetamaskIcon from '../../assets/metamaskIcon.png';
import OneIcon from '../../assets/oneIcon.png';

// outside alerter hook
import OutsideAlerter from "../hooks/OutsideAlerter";

export default function WalletProviderWindow({ toggleWindow, signInMetamask, signInOneWallet }) {

    const handleCloseButton = () => {
        toggleWindow();
    };

    return (
        <div className="pop-up-window-overlay">
            <div className="pop-up-window">
                <OutsideAlerter closePopup={handleCloseButton}>
                    <span className="close" onClick={handleCloseButton}>
                        &times;
                    </span>
                    <div className="pop-up-window-inner">
                        <div className="wallet-option-container" onClick={() => { signInMetamask(); handleCloseButton(); }}>
                            <img src={MetamaskIcon} alt="Metamask" className="wallet-image-icon"></img>
                            <p className="wallet-text">MetaMask</p>
                        </div>

                        <div className="wallet-option-container" onClick={() => { signInOneWallet(); handleCloseButton(); }}>
                            <img src={OneIcon} alt="ONE Wallet" className="wallet-image-icon"></img>
                            <p className="wallet-text">ONE Wallet</p>
                        </div>
                    </div>
                </OutsideAlerter>
            </div>
        </div>
    );
}