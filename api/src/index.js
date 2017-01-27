const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require ('graphql-server-express');
const { buildSchema } = require ('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const DateResolvers = require('./utils/date');
const AlbumResolvers = require('./album/resolvers');

const schema = require ('./schema');

const graphQLSchema = makeExecutableSchema({
    typeDefs: [schema],
    resolvers: Object.assign(
        {},
        AlbumResolvers,
        DateResolvers
    ),
});

const PORT = 3111;

var app = express();

app.use(cors());

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: graphQLSchema,
    context: {
        discogClient: {
            getReleases: (idMb) => [{
                support: 'vinyl',
                label: 'Ninja Tune',
                date: new Date('2015-12-12'),
            }],
        },
        musicBrainzClient: {
            getAlbum: (idMb) => ({
                idMb: 'thisisanId' ,
                cover: 'thisIsAnUrl',
                title: 'thisIsATitle',
                artist: 'thisAnArtisteName',
                publicationDate: new Date('2015-12-12'),
            }),
            searchAlbums: (title) => [{
                idMb: 'thisisanId' ,
                cover: 'thisIsAnUrl',
                title: 'thisIsATitle',
                artist: 'thisAnArtisteName',
                publicationDate: new Date('2015-12-12'),
            }],
        },
    }
}));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);
