import React from "react";
import './css/NavlinksWindow.css';

// outside alerter hook
import OutsideAlerter from "../hooks/OutsideAlerter";


export default function NavlinksWindow(props) {

    const handleCloseButton = () => {
        props.toggleWindow();
    };


    return (
        <div className="navlinks-pop-up-window-overlay">

            <div className="navlinks-pop-up-window">
                <OutsideAlerter closePopup={handleCloseButton}>
                    <span className="close" onClick={handleCloseButton}>
                        &times;
                    </span>
                    <div className="navlinks-pop-up-window-inner">
                        <div className="navlinks-pop-up-window-inner-border">
                            <div className="navlinks-option-container" onClick={() => {handleCloseButton(); props.toggleProfileWindow()}}>
                                <p className="navlinks-text">Profile</p>
                            </div>
                            <a href="/">
                                <div className="navlinks-option-container">
                                    <p className="navlinks-text">Home</p>
                                </div>
                            </a>
                            <a href="/vault">
                                <div className="navlinks-option-container">
                                    <p className="navlinks-text">Vault</p>
                                </div>
                            </a>
                            <a href="/credits">
                                <div className="navlinks-option-container">
                                    <p className="navlinks-text">Credits Store</p>
                                </div>
                            </a>
                            <a href="/bounty">
                                <div className="navlinks-option-container">
                                    <p className="navlinks-text">Claim Bounty</p>
                                </div>
                            </a>
                            <a href="/info">
                                <div className="navlinks-option-container">
                                    <p className="navlinks-text">Info</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </OutsideAlerter>
            </div>
        </div>
    );
}