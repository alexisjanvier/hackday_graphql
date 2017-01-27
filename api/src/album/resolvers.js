module.exports = {
    Query: {
        album: (root, { idMb }, context) => {
            return context.musicBrainzClient.getAlbum(args.idMb);
        },
        albums: (root, { title }, context) => {
            return context.musicBrainzClient.searchAlbums(title);
        },
    },
    Album: {
        releases: (album, args, context) => {
            return context.discogClient.getReleases();
        }
    },
}
