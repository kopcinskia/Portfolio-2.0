import React from 'react'
import {Component} from "react";
import { Waypoint } from 'react-waypoint';

//TODO sprawdź ciekawe formularze!
//TODO validacja
//TODO kontrolka ma być opakowana w cały dodatkowy syf

class ContactSection extends Component {
    _handleWaypointEnter = () => {
        this.props.activeNavbar(false)
    };

    _handleWaypointLeave = () => {
        this.props.activeNavbar(true)
    };

    render(){
        return(
            <section id="contact">
                <Waypoint onEnter={this._handleWaypointEnter}
                          onLeave={this._handleWaypointLeave}>
                    <div id="contact-content">
                        <form id="contact-form" action="">
                            <div className="form-group">
                                <label htmlFor="name">Name: </label>
                                <input id="name" type="text" placeholder="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-mail: </label>
                                <input id="email" type="text" placeholder="email"/>
                            </div>
                            <div className="textarea-group">
                                <label htmlFor="mail_content">Content: </label>
                                <textarea id="mail_content" placeholder="content"/>
                            </div>
                        </form>
                    </div>
                </Waypoint>
            </section>
        )
    }    
}

export default ContactSection;
