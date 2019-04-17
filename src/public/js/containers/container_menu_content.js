import { connect } from 'react-redux'
import {selectSection} from '../actions/index'
import MenuContent from "../components/header/menu_content"
import {bindActionCreators} from "redux";


function mapState(state) {
    return {
        sections: state.sections
    };

}

function mapDispatch(dispatch){
    return bindActionCreators({
        selectSection: selectSection,
    }, dispatch)
}

export default connect(mapState, mapDispatch)(MenuContent);
