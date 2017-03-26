import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import Root from './Root';
import rootReducer from './reducers';
import configureStore from './configureStore';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:3001/graphql' });

const client = new ApolloClient({
    networkInterface,
});
const store = configureStore(rootReducer);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <ApolloProvider client={client}>
        <MuiThemeProvider>
            <Root {...{ store }} />
        </MuiThemeProvider>
    </ApolloProvider>,
    document.getElementById('root'),
);
