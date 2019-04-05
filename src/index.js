require('./main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Container from './public/react/components/container';
import Nav_top from './public/react/components/header';

ReactDOM.render(
        <div>
            <Container />
            <Nav_top />
        </div>,
    document.getElementById('root')
);
