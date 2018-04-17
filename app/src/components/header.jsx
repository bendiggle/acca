import React from 'react';
import Navigation from './navigation';

const Header = () => {
    return (
        <header>
            <div id="header">
                <div id="logo">
                    <h1>Bet Net</h1>
                </div>
                <Navigation/>
            </div>
        </header>
    )
};

export default Header;
