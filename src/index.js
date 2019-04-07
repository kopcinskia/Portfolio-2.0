require('./main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Container from './public/react/components/container';
import Nav_top from './public/react/components/header';

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
            <Container />
            <Nav_top />
        </div>,
    document.getElementById('root')
);
