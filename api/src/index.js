const express = require ('express');
const bodyParser = require ('body-parser');
const { graphqlExpress } = require ('graphql-server-express');
const { buildSchema } = require ('graphql');

const myGraphQLSchema = buildSchema(`
  type Query {
    hello: String
  }
`);

const PORT = 3000;

var app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));

app.listen(PORT);
