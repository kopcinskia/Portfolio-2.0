require('./public/style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import ParallaxContainer from './public/react/components/parallax/parallax_container';
import NavTop from './public/react/components/header/header';

//TODO podziel html na komponenty reaktowe
//TODO sprawdź co tam się wyswietla
//TODO formularz kontaktowy
//TODO re render komp reaktowych
//TODO css automatycznie pojawiające się po re remderze
//TODO i18n tłumaczenia
//TODO zdjecia załaduj
//TODO podłub w portfolio sam slaider to tak biednie

ReactDOM.render(
        <div>
            <ParallaxContainer class_img_name='code' some_text='some TEXT'/>
            <NavTop />
            <div className="content">This div is only here to enable scrolling (height = 800 pixels).</div>
        </div>,
    document.getElementById('root')
);
