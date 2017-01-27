import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { albumShapeForList } from './';
import AlbumList from './AlbumList';
import AlbumsSearchInput from './AlbumsSearchInput';

export const AlbumSearch = ({ albums, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <AlbumsSearchInput />
            <hr />
            <AlbumList albums={albums} />
        </div>
    );
};

AlbumSearch.propTypes = {
    albums: PropTypes.arrayOf(albumShapeForList),
    loading: PropTypes.bool.isRequired,
};

AlbumSearch.defaultProps = {
    albums: [],
};

const graphqlQuery = gql`
    query albums($title: String!) {
        albums(title: $title) {
            idMb,
            cover,
            title
        }
    }
`;

const mapStateToProps = ({ album: { searchedTitle } }) => ({ searchedTitle });

export default compose(
    connect(mapStateToProps),
    graphql(graphqlQuery, {
        options: ({ searchedTitle }) => ({ variables: { title: searchedTitle } }),
        props: ({ data: { albums, loading } }) => ({ albums, loading }),
    }),
)(AlbumSearch);
