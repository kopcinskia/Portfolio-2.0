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
            </section>
        )
    }    
}

export default ContactSection;
