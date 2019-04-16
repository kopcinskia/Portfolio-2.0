import React, { Component } from 'react';
import {connect} from 'react-redux';

class ContextContainer extends Component {

    constructor() {
        super();
        this.state = {
            showMe: true
        }
    }
//TODO dodaj akcja do zmieniania stanu reduxa https://www.youtube.com/watch?v=wa1NaL_WWpI
//TODO component_name w danych
//TODO w akcjach zmieniaj stan
//TODO w componentach tylko odczytuj
    render() {
        return (
            <section>
                <div id="context_container">

                    <div id="home"/>

                    <div id="portfolio"/>

                    <div id="contact"/>

                </div>
            </section>
        )
    }
}
function mapStateToProps(state) {
    return {
        sections: state.sections
    };

}

export default connect(mapStateToProps)(ContextContainer);