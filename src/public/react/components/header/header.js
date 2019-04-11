import React from 'react';
import MobileMenu from './mobile_menu'
import MenuContent from './menu_content'
import '../../../style/main.scss';

const NavTop = () => {
    return <header>
        <nav>
            <div className="container">
                <div className="navbar">

                    <div className="nav-logo">
                        <a href="#">
                            <img src="./images/logoAK.png" alt="logo"/>
                        </a>
                    </div>
                    <div id="lang-select">
                        <button id="lang-pl" className="lang"></button>
                        <button id="lang-ang" className="lang"></button>
                    </div>
                    <div className="main-menu-content">
                        <div id="basic-menu">
                            <MenuContent />
                        </div>
                        <MobileMenu id="hamburger" />
                    </div>
                </div>
            </div>
        </nav>
    </header>
};

export default NavTop