import React, { Component } from 'react'
import '../../../style/main.scss';

class MenuContent extends Component {

    handleChangeDisplayedSection = (section) => {
        this.props.selectSection(section);
    };

    createListSections = () => {

        return this.props.sections.map((section) => {

            return(
                <li
                    key={section.id}
                    onClick={() => this.handleChangeDisplayedSection(section)}
                >
                    <a lang="pl"  >{section.name}</a>

                </li>

            );
        })
    };

    render() {
        return (<ul>
            {this.createListSections()}
        </ul>)
    }
}

export default MenuContent;