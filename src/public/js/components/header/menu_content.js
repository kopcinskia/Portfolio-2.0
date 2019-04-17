import React, { Component } from 'react'
import '../../../style/main.scss';

class MenuContent extends Component {

    changeDisplayedSection(section) {
        this.props.selectSection(section);
        console.log('list: ', this.props.sections.sectionsList)
        console.log('aktualna: ', section)
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

export default MenuContent;