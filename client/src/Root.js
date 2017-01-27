import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App';

const Root = ({ store }) => {
    const history = syncHistoryWithStore(hashHistory, store);

    return (
        <Provider {...{ store }}>
            <Router {...{ history }}>
                <Route path="/" component={App} />
            </Router>
        </Provider>
    );
};

Root.propTypes = {
    store: PropTypes.object.isRequired, // eslint-disable-line
};

export default Root;
