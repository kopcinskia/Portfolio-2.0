

//TODO Porządek!!!
//TODO zainplementuj rozpakowywanie stanu w contenerach!!!!!


import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class ContextContainer extends Component {
    render() {
        if (!this.props.section) {
            return (<div id='home'></div>);
        }
        return (
            <section>
                <div id="context_container">

                    <div id={this.props.section.name}></div>

                </div>
            </section>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        section: state.activeSection
    };
}

export default connect(mapStateToProps)(ContextContainer);