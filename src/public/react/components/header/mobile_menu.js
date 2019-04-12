import React, {Component} from 'react'
import MenuContent from './menu_content'
import '../../../style/main.scss';

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

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }
//TODO add some clas without bottom border when menu on
    render () {
        return(
            <div>

                <div id="button" onClick={this.showMenu} className={this.state.showMenu ? "mobile-open" : ''}></div>
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
};

export default MobileMenu