import React from 'react';
import '../../../main.scss';

const Nav_top = () => {
    return <header>
        <nav>
            <div className="container">
                <div className="navbar">
                    <div className="nav-logo">
                        <a href="#">
                            <img src="#" alt="logo"/>
                        </a>
                    </div>

                    <div id="lang-select">
                    </div>
                    <div className="main-menu-content">
                        <ul id="main-menu">
                            <li><a href="#" lang="pl">Start</a></li>
                            <li><a href="#" lang="pl">Portfolio</a></li>
                            <li><a href="#" lang="pl">Umiejętności</a></li>
                            <li><a href="#" lang="pl">Zalety</a></li>
                            <li><a href="#" lang="pl">O mnie</a></li>
                        </ul>
                    </div>

                    <div id="attach-mobile-menu">

                    </div>
                </div>
            </div>
        </nav>
    </header>
};

export default Nav_top