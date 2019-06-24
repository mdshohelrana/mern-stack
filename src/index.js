import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import routes from './routes';

import './assets/index.scss';
import * as serviceWorker from './serviceWorker';

let history = createBrowserHistory();

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();