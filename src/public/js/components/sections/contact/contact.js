import React from 'react'
import {Component} from "react";

//TODO sprawdź ciekawe formularze!
//TODO validacja
//TODO kontrolka ma być opakowana w cały dodatkowy syf

class ContactSection extends Component {
    render(){
        return(
            <section id="contact">
                <div id="contact-content">
                    <form id="contact-form" action="">
                        <div className="form-group">
                            <label for="name">Name: </label>
                            <input id="name" type="text" placeholder="name"/>
                        </div>
                    </form>
                </div>
            </section>
        )
    }    
}

export default ContactSection;
