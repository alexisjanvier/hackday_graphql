module.exports = `
    scalar Date
    type Album {
        idMb: String!,
        cover: String!,
        title: String!,
        artist: String!,
        publicationDate: Int!,
        releases: [Release],
        similars: [Album],
        spotifyLinks: [SpotifyLink],
    }
    type Release {
        support: String!,
        label: String!,
        date: Date!,
    }
    type SpotifyLink {
        url: String!,
    }
    type Playlist {
        id: ID!,
        title: String!,
        creationDate: Date!,
        albums: [Album],
    }
    type Query {
      albums(title:String!): [Album],
      album(idMb:String!): Album,
      playlists: [Playlist],
      playlist(id:ID!): Playlist,
    }
`;
