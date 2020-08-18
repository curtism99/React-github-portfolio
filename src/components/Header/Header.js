import React from 'react';
import logo from'../../GitHub-Mark-Light-64px.png';
import './Header.css';

const Header = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} />
                <h1>My Github Profolio
                </h1>
        </header>
    </div>
);

export default Header;