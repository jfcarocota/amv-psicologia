import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';


//import './js/jqBootstrapValidation'
//import './js/freelancer'
//import './js/contact_me'

import './freelancer.min.css';
import '@fortawesome/react-fontawesome';


import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
