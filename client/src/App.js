import React from 'react';
import AppBar from 'material-ui/AppBar';
import AlbumsSearch from './album/AlbumsSearch';

const App = () => (
    <div>
        <AppBar
            title="Title"
        />
        <AlbumsSearch />
    </div>
);

export default App;
