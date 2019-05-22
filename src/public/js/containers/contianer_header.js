import React from 'react';
import {connect} from 'react-redux';
import NavTop from '../components/header/header'

function mapState(state) {
    return {
        activeNavBarBool: state.activeNavBarBool
    };
}

export default connect(mapState)(NavTop);