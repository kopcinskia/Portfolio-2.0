import React from 'react';
import {connect} from 'react-redux';
import ContactSection from '../components/sections/contact/contact'

function mapStateToProps(state) {
    return {
        // section: state.activeSection
    };
}

export default connect(mapStateToProps)(ContactSection);