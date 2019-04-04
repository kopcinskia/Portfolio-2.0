import React from 'react';
import ReactDOM from 'react-dom';
import Container from './src/components/container';
import Nav_top from './src/components/header';


ReactDOM.render(
        <div>
            <Container />
            <Nav_top />
        </div>,
    document.getElementById('root')
);

//PS: You need to create and export this "container component" in src to work ok?