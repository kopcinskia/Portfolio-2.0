import React, {Component} from 'react'
import MenuContent from '../../containers/container_menu_content'
import '../../../style/main.scss';

class MobileMenu extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
            slideOff: ''
        };
    }

    handleShowMenu = (event) => {
        event.preventDefault();
        this.setState({slideOff: 'slide-on'});
        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.handleCloseMenu)
        })
    };

    handleCloseMenu = (event) => {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({slideOff: 'slide-off'});
            setTimeout(() => {
                this.setState({showMenu: false}, () => {
                    document.removeEventListener('click', this.handleCloseMenu);
                })}, 380)

        }
    };

    render () {
        return(
            <div>
                <div id="hamburger" onClick={this.handleShowMenu} className={this.state.showMenu ? "menu-open" : ''}>
                    <div id="top-line" className="line" />
                    <div id="middle-line" className="line" />
                    <div id="bottom-line" className="line" />
                </div>
                {
                    this.state.showMenu ?
                        (
                            <div id="mobile-menu" className={this.state.slideOff}
                                 ref={(element) => {
                                     this.dropdownMenu = element;
                                 }}>
                                <MenuContent className={this.state.showMenu ? 'show-list' : null}/>
                            </div>
                        ) : (
                            null
                        )
                }
            </div>
        )
    }
}

export default MobileMenu