const expect = require('expect');
const { Query: { album, albums } } = require('./resolver');

const context = {
    musicBrainzClient: {
        getAlbum: (idMb) => ({
            idMb ,
            cover: 'thisIsAnUrl',
            title: 'thisIsATitle',
            artist: 'thisAnArtisteName',
            publicationDate: new Date('2015-12-12'),
        }),
};

describe('Album resolver', () => {
    it('should return an Album', () => {
        assert(album({}, { idMb: 'testIdMb'}, context)).toBe({
            idMb: 'testIdMb' ,
            cover: 'thisIsAnUrl',
            title: 'thisIsATitle',
            artist: 'thisAnArtisteName',
            publicationDate: new Date('2015-12-12'),
        })
    });
});
