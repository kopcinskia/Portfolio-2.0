import React,{Component} from 'react';

import ParallaxContainer from './components/parallax/parallax_container';
import NavTop from './components/header/header';
import ContextContainer from './containers/context_container';

class App extends Component {
    render() {
        return (
            <div>
                <ParallaxContainer class_img_name='code' some_text='some TEXT'/>
                <NavTop/>
                <ContextContainer/>
                <div className="content">This div is only here to enable scrolling (height = 800 pixels).</div>
            </div>
        )
    }
}

export default App;
