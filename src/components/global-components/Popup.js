import React from 'react';
import OutsideAlerter from './hooks/OutsideAlerter';
import './css/Popup.css';

const Popup = ({ text, closePopup }) => {
    return (
        <div className='popup'>
            <OutsideAlerter closePopup={closePopup}>
                <div onClick={null} className='popup-inner'>
                    <h1>{text}</h1>
                    <button onClick={closePopup}>close me</button>
                </div>
            </OutsideAlerter>

        </div>
    );
}

export default Popup;