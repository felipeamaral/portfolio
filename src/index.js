import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from '@components/App';
import { I18nextProvider } from "react-i18next";
import i18n from "./../i18n";

import Favicon from 'react-favicon';

import favicon from './assets/images/favicon-32x32.png'


const appElement = document.getElementById('app')

ReactDOM.render(
        <div className="index">
            <Favicon url={favicon}/>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </div>
    , 
    appElement);