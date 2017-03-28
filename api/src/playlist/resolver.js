module.exports = {
    Query: {
        playlists: async (root, params, { db }) => {
            const playlists = await db.collection('playlists').find({}).toArray();
            return playlists.map(pl => ({
                id: pl._id,
                title: pl.title,
                creationDate: pl.creationDate,
                albums: pl.albums,
            }));
        },
    },
    Mutation: {
        newPlaylist: async ( root, { title }, { db }) => {
            const { ops: [newPlaylist] } = await db.collection('playlists').insertOne({
                title,
                creationDate: new Date(),
                albums: [],
            });

            return {
                id: newPlaylist._id,
                title: newPlaylist.title,
                creationDate: newPlaylist.creationDate,
                albums: newPlaylist.albums,
            };
        }
    }
}
