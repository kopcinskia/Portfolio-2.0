import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import '../../../style/main.scss';
import {selectSection} from "../../actions/index";

class MenuContent extends Component {

    changeDisplayedSection(section) {
        this.props.selectSection(section);
    }

    createListSections() {
        return this.props.sections.sectionsList.map((section) => {
            return(
                <li
                    key={section.id}
                    onClick={() => this.changeDisplayedSection(section)}
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