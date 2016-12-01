import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

/*
 * REDUX
 */
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import createLogger from 'redux-logger';
import allReducers from './reducers';

const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(logger));
const history = syncHistoryWithStore(browserHistory, store);

/*
 * COMPONENTS
 */
import {
    App,
    NotFound,
    FlashCard
} from './components';

const RouterComponent = () => {
    return (
        <Provider store={store}>

            <Router history={history}>
                <Route component={App}>
                    <Route path="/" component={FlashCard}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>

        </Provider>
    );
};

export default RouterComponent;