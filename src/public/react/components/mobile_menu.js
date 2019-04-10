import React, {Component} from 'react'
import MenuContent from './menu_content'

class MobileMenu extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu)
        })
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render () {
        return(
            <div className="container">

                <button onClick={this.showMenu}>drop</button>
                {
                    this.state.showMenu ?
                        (
                            <div id="menu">
                                <MenuContent/>
                            </div>
                        ) : (
                            null
                        )
                }
            </div>
        )
    }
};

export default MobileMenu