import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../style/main.scss';






class MenuContent extends Component {

    createListSections() {
        return this.props.display_content.map((section) => {
            return(
                <li key={section.section_id}><a href="#" lang="pl">{section.section_name}</a></li>
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
        display_content: state.display_content
    };

}

export default connect(mapStateToProps)(MenuContent);