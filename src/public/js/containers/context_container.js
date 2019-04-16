import React, { Component } from 'react';
import {connect} from 'react-redux';

class ContextContainer extends Component {

    constructor() {
        super();
        this.state = {
            showMe: true
        }
    }

    render() {
        return (
            <section>
                <div id="context_container">

                    <div id="home"/>

                    <div id="portfolio"/>

                    <div id="contact"/>

                </div>
            </section>
        )
    }
}
function mapStateToProps(state) {
    return {
        display_content: state.display_content
    };

}

export default connect(mapStateToProps)(ContextContainer);