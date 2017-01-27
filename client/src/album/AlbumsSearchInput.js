import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

import { searchForAlbums as searchForAlbumsAction } from './';

const AlbumsSearchInput = ({ searchForAlbums, value }) => (
    <TextField
        name="searchedTitle"
        type="text"
        value={value}
        onChange={searchForAlbums}
        floatingLabelText="Enter an album title"
        fullWidth
    />
);

AlbumsSearchInput.propTypes = {
    searchForAlbums: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ value: state.album.searchedTitle });

const mapDispatchToProps = dispatch => bindActionCreators({
    searchForAlbums: (event, newValue) => searchForAlbumsAction(newValue),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsSearchInput);
