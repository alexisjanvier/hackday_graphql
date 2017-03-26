module.exports = {
    Query: {
        album: (root, { idMb }, context) => {
            return context.musicBrainzClient.getAlbum(idMb);
        },
        albums: (root, { title, sort }, context) => {
            return context.musicBrainzClient.searchAlbums(title);
        },
    },
    Album: {
        releases: (album, args, context) => {
            return context.discogClient.getReleases();
        }
    },
}
