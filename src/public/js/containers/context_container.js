import React, { Component } from 'react';
import {connect} from 'react-redux';

class ContextContainer extends Component {

//TODO dodaj akcja do zmieniania stanu reduxa https://www.youtube.com/watch?v=wa1NaL_WWpI
//TODO component_name w danych
//TODO reducerach zmieniaj stan
//TODO w componentach tylko odczytuj
//TODO zainplementuj rozpakowywanie stanu w contenerach!!!!!

    sectionGenerator() {
        this.props.sections.sectionsList.map((section) => {
            if(section.displayStatus === false) return null;
            return (
                <div id={section.name} >bbb</div>
            )
        })
    }

    render() {
        console.log('RENDER')
        return (
            <section>
                <div id="context_container">
                    {
                        this.props.sections.sectionsList.map((section) => {
                            console.log(section, "rerender!")
                            if(section.displayStatus === false) return null;
                            return (
                                <div key={section.name} id={section.name} >bbb</div>
                            )
                        })
                    }


                </div>
            </section>
        )
    }
}
function mapState(state) {
    return {
        sections: state.sections
    };

}

export default connect(mapState)(ContextContainer);