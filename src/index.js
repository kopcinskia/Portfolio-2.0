import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './public/js/app';
import allReducers from "./public/js/reducers/index";
require('./public/style/main.scss');

//TODO formularz kontaktowy
//TODO re render komp reaktowych
//TODO i18n tłumaczenia
//TODO zdjecia załaduj
//TODO sprawdź ciekawe slaidery

const store = createStore(allReducers);

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root')
);
