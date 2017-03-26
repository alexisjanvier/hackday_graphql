module.exports = `
    scalar Date
    # Album entity
    type Album {
        # Id musicBrainz
        idMb: String! ,
        # Url for album cover
        cover: String!,
        # Album's main title
        title: String!,
        # Artists credited to the album
        artists: [Artist],
        # First publication date
        publicationDate: Date!,
        # The different releases of the album
        releases: [Release],
        # If you liked it, you might also like this albums
        similars: [Album],
        # Spotify listening links
        spotifyLinks: [SpotifyLink],
    }
    type Artist {
        # Id musicBrainz
        idMb: String! ,
        # Is it a singer, a group, a drummer, ...
        type: String!,
        # Artist's name
        name: String!,
        # Artist's current country
        country: String!,
    }
    type Release {
        # Type of support : cd, vinyl, ...
        support: String!,
        # Label with this release
        label: String!,
        # Publication date
        date: Date!,
    }
    type SpotifyLink {
        # Spotify link to listen the album
        url: String!,
    }
    type Playlist {
        # unique identifier of the playlist
        id: ID!,
        # Title of the playlist
        title: String!,
        # Creation date
        creationDate: Date!,
        # Albums of the playlist
        albums: [Album],
    }
    type Query {
        # Request all albums
        albums(
            # Album Title
            title:String
            # Sort order
            sort:String
        ): [Album],
        # Request a specific album by idMb
        album(idMb:String!): Album,
        # Request all playlists
        playlists: [Playlist],
        # Request a specific playlist by Id
        playlist(id:ID!): Playlist,
    }
    type Mutation {
        # Create a new playlist
        newPlaylist(title: String!): Playlist,
    }
`;
