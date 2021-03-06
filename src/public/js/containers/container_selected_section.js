import React from 'react';
import {connect} from 'react-redux';
import SectionHandler from '../components/sections/selected_section'

function mapStateToProps(state) {
    return {
        section: state.activeSection
    };
}

export default connect(mapStateToProps)(SectionHandler);