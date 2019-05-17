//This will be inside src/components

import React, { Component } from 'react';


class ParallaxContainer extends Component {
    //TODO wyśrodkuj text paralaxy
    //TODO ciulowo że container masz w komponentch

    render() {
        let class_custom_name = 'fixed-bg ' + this.props.class_img_name;

        return (<section className="parallax">
                <div className={class_custom_name}>
                    <div className="text_area">
                        <p>{this.props.some_text}</p>
                    </div>
                </div>
            </section>
        )
    };
}

export default ParallaxContainer