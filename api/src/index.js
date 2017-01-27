const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require ('graphql-server-express');
const { buildSchema } = require ('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const DateResolvers = require('./utils/date');
const AlbumResolvers = require('./album/resolvers');
const PlaylistResolvers = require('./playlist/resolver');
const { MongoClient } = require('mongodb');
const merge = require('lodash.merge');

const schema = require ('./schema');

const graphQLSchema = makeExecutableSchema({
    typeDefs: [schema],
    resolvers: merge(
        AlbumResolvers,
        DateResolvers,
        PlaylistResolvers
    ),
});

const app = express();

app.use(cors());

app.use(async (req, res, next) => {
    req.db = await MongoClient.connect('mongodb://localhost:27017/graphMusic');

    await next();
});

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), (req, res, next) => graphqlExpress({
    schema: graphQLSchema,
    context: {
        db: req.db,
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
})(req, res, next));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/', express.static('public'))

app.listen(3000);
