import { connect } from 'react-redux';
import {activeNavbar} from '../actions/index';
import ContactSection from '../components/sections/contact/contact'
import {bindActionCreators} from 'redux';


function mapState(state) {
    return {
        activeNavBarBool: state.activeNavBarBool
    };
}

function mapDispatch(dispatch){
    return bindActionCreators({
        activeNavbar: activeNavbar,
    }, dispatch)
}

export default connect(mapState ,mapDispatch)(ContactSection);