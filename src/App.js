import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// component imports
import Navbar from './components/navbar-components/Navbar';
import Sidebar from './components/side-bar-components/Sidebar';
import Popup from './components/global-components/Popup';
import Aboutme from './components/aboutme-components/Aboutme';
import Dinoland from './components/dinoland-components/Dinoland';

function App() {
    // hook use state for pop up
    const [popUpDisplayed, setPopUpDisplay] = useState(false);

    const togglePopUp = () => {
        setPopUpDisplay(!popUpDisplayed);
    }
    // end of hook use state for pop up

    // hooks for sidebar use state
    const [sidebarDisplayed, setSidebarDisplay] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const [pageMarginRight, setPageMarginRight] = useState(0);
    const [headerComponentsDisplayState, setHeaderComponentsDisplayState] = useState("flex");

    const hamburgerClicked = () => {
        if (!sidebarDisplayed) {
            setSidebarWidth((prevState) => prevState = 250);
            setPageMarginRight((prevState) => prevState = 250);
            setHeaderComponentsDisplayState((prevState) => prevState = "none");
            setSidebarDisplay(!sidebarDisplayed);
        } else {
            setSidebarWidth((prevState) => prevState = 0);
            setPageMarginRight((prevState) => prevState = 0);
            setHeaderComponentsDisplayState((prevState) => prevState = "flex");
            setSidebarDisplay(!sidebarDisplayed);
        }
    }
    // end of hooks for sidebar state

    

    return (
        <div className="App">
            <div className="sidebar-container" style={{ width: sidebarWidth + 'px' }}>
                <Sidebar />
            </div>
            <div className="page-content-container" style={{ marginRight: pageMarginRight + 'px' }}>
                <div className="sticky-navbar">
                    <Navbar hamburgerClicked={hamburgerClicked} headerComponentsDisplayState={headerComponentsDisplayState}/>
                </div>

                <Aboutme />
                <Dinoland />
                

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
        </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
        </a>
                    <h1> Simple Popup Example In React Application </h1>
                    <button onClick={togglePopUp}> Click To Launch Popup</button>

                    {popUpDisplayed ?
                        <Popup
                            text='Click "Close Button" to hide popup'
                            closePopup={togglePopUp}
                        />
                        : null
                    }
                </header>
            </div>

        </div>
    );
}

export default App;
