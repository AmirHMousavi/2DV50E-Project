import React from 'react';
import {render} from 'react-dom';
import {Router, BrowserHistory} from 'react-router';
import routes from './routes';

render(<Router history={BrowserHistory} routes={routes}/>, document.getElementById('app'));