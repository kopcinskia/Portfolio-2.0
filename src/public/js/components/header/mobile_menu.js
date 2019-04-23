import React, {Component} from 'react'
import MenuContent from '../../containers/container_menu_content'
import '../../../style/main.scss';

class MobileMenu extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };
    }
//TODO Animacje i settimeout
    handleShowMenu = (event) => {
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.handleCloseMenu)
        })
    };

    handleCloseMenu = (event) => {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.handleCloseMenu);
            });
        }
    };

    render () {
        return(
            <div>
                <div id="button" onClick={this.handleShowMenu} className={this.state.showMenu ? "mobile-open" : ''} />
                {
                    this.state.showMenu ?
                        (
                            <div id="mobile-menu"
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