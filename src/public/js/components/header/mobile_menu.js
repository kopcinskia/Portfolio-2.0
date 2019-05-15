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

    handleShowMenu = (event) => {
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.handleCloseMenu)
        })
    };

//TODO Animacje i settimeout  add out animate and configure timegit co
    handleCloseMenu = (event) => {
        if (!this.dropdownMenu.contains(event.target)) {
            setTimeout(() => {
                this.setState({showMenu: false}, () => {
                    document.removeEventListener('click', this.handleCloseMenu);
                })}, 1000)
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