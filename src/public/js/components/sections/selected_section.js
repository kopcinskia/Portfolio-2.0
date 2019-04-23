import React from 'react';

const ContextContainer = (props) => {

    //TODO zmień ten warunek bo żal parzeć
        return (
            <div id="selected-section">
                {!props.section ? <div id="home"></div> /*/!* <Home /> *!/*/ :
                    props.section.name === 'home' ? <div id="home"></div> /*/!* <Home /> *!/*/ :
                        props.section.name === 'portfolio' ? <div id="portfolio"></div> /*/!*<Portfolio />*!/*/ :
                            props.section.name === 'contact' ? <div id="contact"></div> /*/!*<Contact />*!/*/ : null}
            </div>
            );
};

export default ContextContainer;