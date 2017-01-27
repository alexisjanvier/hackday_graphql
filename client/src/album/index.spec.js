import expect from 'expect';
import reducer, { searchForAlbums } from './';

describe('album reducer', () => {
    it('should handle SEARCH_FOR_ALBUMS action', () => {
        expect(reducer({ searchedTitle: 'old title' }, searchForAlbums('the title'))).toEqual({
            searchedTitle: 'the title',
        });
    });
});
