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
                    <div id="contact-wrapper">
                        <form id="contact-form" action="">
                            <h2 className="cantact-heading">Contact</h2>
                            <div className="form-group name">
                                <label htmlFor="name">Name: </label>
                                <input id="name" type="text" placeholder="name"/>
                            </div>
                            <div className="form-group email">
                                <label htmlFor="email">E-mail: </label>
                                <input id="email" type="text" placeholder="email"/>
                            </div>
                            <div className="form-group mail-content">
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
