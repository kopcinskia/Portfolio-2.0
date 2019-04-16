import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import ParallaxContainer from './public/js/components/parallax/parallax_container';
import NavTop from './public/js/components/header/header';
import ContextContainer from './public/js/containers/context_container';
import allReducers from "./public/js/reducers";
require('./public/style/main.scss');

//TODO podziel html na komponenty reaktowe
//TODO sprawdź co tam się wyswietla
//TODO formularz kontaktowy
//TODO re render komp reaktowych
//TODO css automatycznie pojawiające się po re remderze
//TODO i18n tłumaczenia
//TODO zdjecia załaduj
//TODO podłub w portfolio sam slaider to tak biednie

const store = createStore(allReducers);

ReactDOM.render(
        <Provider store={store}>
            <div>
                <ParallaxContainer class_img_name='code' some_text='some TEXT'/>
                <NavTop />
                <ContextContainer />
                <div className="content">This div is only here to enable scrolling (height = 800 pixels).</div>
            </div>
        </Provider>,
    document.getElementById('root')
);
