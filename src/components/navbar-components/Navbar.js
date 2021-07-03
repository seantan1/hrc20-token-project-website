import React, { useState } from 'react';
import './css/Navbar.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import PuruBrandWhite from '../../assets/white/4.png';
import PuruBrandBlack from '../../assets/black/4.png';
import PuruBrandPink from '../../assets/pink/4.png';
// import loadingGIF from '../../assets/loading-icon-transparent-background-12.jpg';

const Navbar = (props) => {

    // hook for nav bar css change on scroll
    const [backgroundColor, setbackgroundColor] = useState("none");
    const [fontColor, setfontColor] = useState("white");
    const [hoverBrandImage, setHoverBrandImage] = useState(false);
    const [hoverProfileImage, setHoverProfileImage] = useState(false);
    // hide navbar if scrolling past the banner
    const [hideNavBar, setHideNavBar] = useState(false);
    const [navBarOpacity, setNavBarOpacity] = useState(1);

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

        // slowly hideing navbar
        if (window.pageYOffset > 500) {
            setHideNavBar(true);
        }
        else if (window.pageYOffset > 350) {
            setNavBarOpacity((500-window.pageYOffset)/150);
        }
        else {
            setHideNavBar(false);
            setNavBarOpacity(1);
        }
    };
    // end of hook for nav bar css change on scroll

    return (
        <div>
            {!hideNavBar &&
                <div className="navbar" style={{ backgroundColor: backgroundColor, opacity: navBarOpacity }}>
                    <div className="navbar-inner">
                        <div className="brand-container" onMouseEnter={() => setHoverBrandImage(true)} onMouseLeave={() => setHoverBrandImage(false)} onClick={props.toggleNavlinksWindow}>
                            {hoverBrandImage ?
                                <div>
                                    <img className="brand-image" src={PuruBrandPink} alt="puru"></img>
                                </div>
                                :
                                <div>
                                    {fontColor === "white" ? <img className="brand-image" src={PuruBrandWhite} alt="puru"></img> : <img className="brand-image" src={PuruBrandBlack} alt="puru"></img>}
                                </div>
                            }

                        </div>

                        <div className="nav navbar-links">
                            <a style={{ color: fontColor }} href="/">Home</a>
                            <a style={{ color: fontColor }} href="/vault">Vault</a>
                            <a style={{ color: fontColor }} href="/credits-store">Credits Store</a>
                            <a style={{ color: fontColor }} href="/bounty">Claim Bounty</a>
                            <a style={{ color: fontColor }} href="/info">Info</a>
                        </div>
                        <div className="profile-container" onClick={props.toggleProfileWindow} onMouseEnter={() => setHoverProfileImage(true)} onMouseLeave={() => setHoverProfileImage(false)}>
                            {hoverProfileImage ?
                                <div>
                                    <img className="profile-image" src={PuruBrandPink} alt="puru"></img>
                                </div>
                                :
                                <div>
                                    {fontColor === "white" ? <img className="profile-image" src={PuruBrandWhite} alt="puru"></img> : <img className="profile-image" src={PuruBrandBlack} alt="puru"></img>}
                                </div>
                            }
                        </div>
                        
                        <div className="connect-wallet-button-container">
                            {!props.authorised && <button className="connect-wallet-button" onClick={props.toggleWalletWindow}>Connect Wallet</button>}
                            {props.authorised && <button className="connect-wallet-button" onClick={props.toggleWalletWindow}>{props.account.substring(0, 11)}...</button>}
                        </div>
                    </div>
                </div>
            }
        </div>

    );
}

export default Navbar;
