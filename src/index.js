import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import Favicon from 'react-favicon';

import favicon from './assets/images/favicon-16x16.png'


const appElement = document.getElementById('app')

ReactDOM.render(
    <div>
        <Favicon url={favicon}/>
        <App />
    </div>
    , 
    appElement);