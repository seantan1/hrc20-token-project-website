import React, { useState } from 'react';
import './css/Navbar.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';


const Navbar = () => {

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
                    <a href="/" className="Brand" style={{ color: fontColor }}>Sean Tan</a>

                    <div className="nav navbar-links">

                        <div className="nav-bar-links-hide-in-mobile">
                            <a style={{ color: fontColor }} href="#">Vault</a>
                            <a style={{ color: fontColor }} href="#">myRMIT</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;
