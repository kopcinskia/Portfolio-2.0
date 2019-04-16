import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import '../../../style/main.scss';
import {selectSection} from "../../actions/index";

class MenuContent extends Component {

    createListSections() {
        return this.props.sections.map((section) => {
            return(
                <li
                    key={section.id}
                    onClick={() => this.props.selectSection(section)}

                >
                    <a href="#" lang="pl"  >{section.name}</a>
                </li>
            );
        })
    }

    render() {
        return (<ul>
            {this.createListSections()}
        </ul>)
    }
};


function mapStateToProps(state) {
    return {
        sections: state.sections
    };

}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectSection: selectSection}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MenuContent);