import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// component imports
import Navbar from './components/navbar-components/Navbar';
import Popup from './components/global-components/Popup';
import Aboutme from './components/aboutme-components/Aboutme';
import Dinoland from './components/dinoland-components/Dinoland';

function App() {
    // hook use state for pop up
    const [popUpDisplayed, setPopUpDisplay] = useState(false);

    const togglePopUp = () => {
        setPopUpDisplay(!popUpDisplayed);
    }

    return (
        <div className="App">
            <div className="page-content-container">
                <div className="sticky-navbar">
                    <Navbar/>
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
