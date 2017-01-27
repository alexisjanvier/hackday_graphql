import React, { PropTypes } from 'react';
import AlbumItem from './AlbumItem';
import { albumShapeForList } from './';

const styles = {
    AlbumList: {
        display: 'flex',
    },
    AlbumItem: {
        width: '33%',
    },
};

const AlbumList = ({ albums }) => (
    <div style={styles.AlbumList}>
        {albums.map(album => (
            <AlbumItem style={styles.AlbumItem} key={album.idMb} album={album} />
        ))}
    </div>
);

AlbumList.propTypes = {
    albums: PropTypes.arrayOf(albumShapeForList).isRequired,
};

export default AlbumList;
