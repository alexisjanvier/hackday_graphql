import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';

export default function configureStore(rootReducer, initialState) {
    const middlewares = applyMiddleware(
        routerMiddleware(hashHistory),
    );

    const devtools = window.devToolsExtension ? window.devToolsExtension() : f => f;

    const store = createStore(
        rootReducer,
        initialState,
        compose(middlewares, devtools),
    );

    return store;
}
