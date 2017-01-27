import React from 'react';
import { Card, CardActions, CardHeader, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { albumShapeForList } from './';

const AlbumItem = ({ album: { cover, title }, ...props }) => (
    <Card {...props}>
        <CardHeader title={title} />
        <CardMedia>
            <img alt={`Cover for ${title}`} src={cover} />
        </CardMedia>
        <CardActions>
            <FlatButton label="Add to playlist" />
        </CardActions>
    </Card>
);

AlbumItem.propTypes = {
    album: albumShapeForList.isRequired,
};

export default AlbumItem;
