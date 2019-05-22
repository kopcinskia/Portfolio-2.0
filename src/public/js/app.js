import React,{Component} from 'react';

import ParallaxContainer from './components/parallax/parallax_container';
import NavTop from './containers/contianer_header';
import ContextContainer from './containers/container_selected_section';

class App extends Component {
    render() {
        return (
            <div>
                <NavTop/>
                <ParallaxContainer class_img_name='code' some_text='some TEXT'/>
                <ContextContainer/>
                <div className="content">This div is only here to enable scrolling (height = 800 pixels).</div>
            </div>
        )
    }
}

export default App;
