import React from 'react';
import '../../../main.scss';

const Nav_top = () => {
    return <header>
        <nav>
            <div className="container">
                <div className="navbar">

                    <div className="nav-logo">
                        <a href="#">
                            <img src="./images/logoAK.png" alt="logo"/>
                        </a>
                    </div>


                    <div className="main-menu-content">
                        <div id="hamburger">

                        </div>

                        <ul id="main-menu">
                            <li><a href="#" lang="pl">home</a></li>
                            <li><a href="#" lang="pl">projects</a></li>
                            <li><a href="#" lang="pl">contact</a></li>
                        </ul>
                    </div>

                    <div id="lang-select">
                        <button id="lang-pl" className="lang">a</button>
                        <button id="lang-ang" className="lang">a</button>
                    </div>




                </div>
            </div>
        </nav>
    </header>
};

export default Nav_top