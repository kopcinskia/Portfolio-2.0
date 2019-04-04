import React, { Component } from 'react';
import '../style/header.scss';

const Nav_top = () => {
    return <header>
        <nav>
            <div className="container">
                <div className="navbar">
                    <div className="nav-logo">
                        <a href="#start">
                            <img src="#" alt="logo"/>
                        </a>
                    </div>

                    <div id="lang-select">
                        <button id="lang-pl" className="lang"></button>
                    </div>
                    <div className="main-menu-content">
                        <ul id="main-menu">
                            <li><a href="#start" lang="pl">Start</a></li>
                            <li><a href="#portfolio" lang="pl">Portfolio</a></li>
                            <li><a href="#skills" lang="pl">Umiejętności</a></li>
                            <li><a href="#advantages" lang="pl">Zalety</a></li>
                            <li><a href="#aboutMe" lang="pl">O mnie</a></li>
                        </ul>
                    </div>

                    <div id="attach-mobile-menu">

                    </div>
                </div>
            </div>
        </nav>
    </header>
}

export default Nav_top