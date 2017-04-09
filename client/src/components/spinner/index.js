import React from 'react';
import './spinner.scss';

export default () => {
    return (
        <div className="container-spinner">
            <div className="chasing-dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        </div>
    );
};


