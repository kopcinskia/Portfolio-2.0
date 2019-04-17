import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './public/js/app';
import allReducers from "./public/js/reducers";
require('./public/style/main.scss');
import {selectSection} from "./public/js/actions/index";

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
            <App />
        </Provider>,
    document.getElementById('root')
);
