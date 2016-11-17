import React from 'react';
import {render} from 'react-dom';
import {Router, BrowserHistory} from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import routes from './routes';

const store=createStore(
    (state={})=>state,applyMiddleware(thunk)
);

render(<Provider store={store}>
    <Router history={BrowserHistory} routes={routes}/>
    </Provider>, document.getElementById('app'));