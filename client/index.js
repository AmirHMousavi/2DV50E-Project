import React from 'react';
import {render} from 'react-dom';
import {Router, BrowserHistory, hashHistory } from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware, compose} from 'redux';
import routes from './routes';
import rootReducer from './rootReducer';



const store=createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():f=>f
        )
);

render(<Provider store={store}>
    <Router history={BrowserHistory} routes={routes}/>
    </Provider>, document.getElementById('app'));