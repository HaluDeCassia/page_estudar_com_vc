import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './fontawesome-free-5.0.6/web-fonts-with-css/css/fontawesome-all.min.css'
import './css/index.css';

import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
