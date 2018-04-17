import React from 'react';

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a className="navbar-link" href='#'>Home</a>
                    </li>
                    <li className="navbar-item">
                        <a className="navbar-link" href='#'>Account</a>
                    </li>
                    <li className="navbar-item">
                        <a className="navbar-link" href='#'>Settings</a>
                    </li>
                    <li className="navbar-item">
                        <a className="navbar-link" href='#'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navigation;
