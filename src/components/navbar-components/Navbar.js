import React, { useState } from 'react';
import './css/Navbar.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import PuruBrandWhite from '../../assets/white/4.png';
import PuruBrandBlack from '../../assets/black/4.png';
import loadingGIF from '../../assets/loading-icon-transparent-background-12.jpg';

const Navbar = (props) => {

    // hook for nav bar css change on scroll
    const [backgroundColor, setbackgroundColor] = useState("none");
    const [fontColor, setfontColor] = useState("white");

    // scroll event listener
    window.onscroll = function () {
        if (window.pageYOffset === 0) {
            setbackgroundColor((prevState) => prevState = "rgba(255, 255, 255, 0)")
            setfontColor((prevState) => prevState = "white")
        }
        else {
            setbackgroundColor((prevState) => prevState = "rgba(255, 255, 255, 0.7)")
            setfontColor((prevState) => prevState = "black")
        }
    };
    // end of hook for nav bar css change on scroll

    return (
        <div>
            <div className="navbar" style={{ backgroundColor: backgroundColor }}>
                <div className="navbar-inner">
                    <div className="brand-container">
                        {fontColor == "white" ? <a href="/"><img className="brand-image" src={PuruBrandWhite}></img></a> : <a href="/"><img className="brand-image" src={PuruBrandBlack}></img></a>}
                    </div>

                    <div className="nav navbar-links">
                        <a style={{ color: fontColor }} href="/">Home</a>
                        <a style={{ color: fontColor }} href="/vault">Vault</a>
                        <a style={{ color: fontColor }} href="/credits-store">Credits Store</a>
                        <a style={{ color: fontColor }} href="/bounty">Claim Bounty</a>
                        <a style={{ color: fontColor }} href="/info">Info</a>
                    </div>
                    {props.transactionPending && <div className="tx-pending-container"><img src={loadingGIF} id="loading-gif"></img></div>}
                    <div className="connect-wallet-button-container">
                        {!props.authorised && <button className="connect-wallet-button" onClick={props.toggleWalletWindow}>Connect Wallet</button>}
                        {props.authorised && <button className="connect-wallet-button" onClick={props.toggleWalletWindow}>{props.account.substring(0, 11)}...</button>}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;
