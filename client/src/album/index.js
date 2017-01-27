import { PropTypes } from 'react';
import { createAction, handleActions } from 'redux-actions';

export const SEARCH_FOR_ALBUMS = 'SEARCH_FOR_ALBUMS';

export const searchForAlbums = createAction(SEARCH_FOR_ALBUMS);

export const defaultState = {
    searchedTitle: 'foo',
};

// This is the reducer
export default handleActions({
    SEARCH_FOR_ALBUMS: (state, { payload: searchedTitle }) => ({ ...state, searchedTitle }),
}, defaultState);

export const albumShapeForList = PropTypes.shape({
    idMb: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
});
