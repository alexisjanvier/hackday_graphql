const express = require ('express');
const bodyParser = require ('body-parser');
const { graphqlExpress, graphiqlExpress } = require ('graphql-server-express');
const { buildSchema } = require ('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const Date = require('./utils/date');

const schema = require ('./schema');

const graphQLSchema = makeExecutableSchema({
    typeDefs: [schema],
    resolvers: Object.assign(
        {},
        Date
    ),
});

const PORT = 3111;

var app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: graphQLSchema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);
