import React, { Component } from 'react'
import '../../../style/main.scss';

class MenuContent extends Component {
    constructor() {
        super()

        this.changeDisplayedSection = this.changeDisplayedSection.bind(this);
    }

    //TODO rename to handle
    changeDisplayedSection(section) {
        this.props.selectSection(section);
    }


    createListSections() {
        return this.props.sections.map((section) => {

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