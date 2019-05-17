import React from 'react';
import Contact from '../../containers/contianer_contact'

const SectionHandler = (props) => {

        return (
            <div id="selected-section">
                {!props.section ? <Contact id="contact" />:
                    props.section.name === 'home' ? <div id="home" />:
                        props.section.name === 'portfolio' ? <div id="portfolio" />:
                            props.section.name === 'contact' ? <Contact id="contact" />: null}
            </div>
            );
};

export default SectionHandler;