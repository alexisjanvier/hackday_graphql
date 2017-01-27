const expect = require('expect');
const { Query: { album, albums } } = require('./resolvers');

const context = {
    musicBrainzClient: {
        getAlbum: (idMb) => ({
            idMb ,
            cover: 'thisIsAnUrl',
            title: 'thisIsATitle',
            artist: 'thisAnArtisteName',
            publicationDate: new Date('2015-12-12'),
        }),
    },
};

describe('Album resolver', () => {
    it('should return an Album', () => {
        expect(album({}, { idMb: 'testIdMb'}, context)).toEqual({
            idMb: 'testIdMb' ,
            cover: 'thisIsAnUrl',
            title: 'thisIsATitle',
            artist: 'thisAnArtisteName',
            publicationDate: new Date('2015-12-12'),
        })
    });
});
