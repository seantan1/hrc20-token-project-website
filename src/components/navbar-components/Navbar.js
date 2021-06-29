import React, { useState } from 'react';
import './css/Navbar.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import PuruImage from '../../assets/PURU.png';

const Navbar = ({ authorised, account, toggleWalletWindow }) => {

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
                    <img className="brand-image" src={PuruImage}></img>
                    <a href="/" className="Brand" style={{ color: fontColor }}>PURU</a>

                    <div className="nav navbar-links">

                        <div className="nav-bar-links-hide-in-mobile">
                            <a style={{ color: fontColor }} href="/vault">PuruVault</a>
                            <a style={{ color: fontColor }} href="#">How To Buy</a>
                        </div>

                    </div>
                    <div className="nav-bar-right">
                        <div className="connect-wallet-button-container">
                            {!authorised && <button className="connect-wallet-button" onClick={toggleWalletWindow}>Connect Wallet</button>}
                            {authorised && <button className="connect-wallet-button" onClick={toggleWalletWindow}>{account.substring(0, 11)}...</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;
