import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import album from './album';

const rootReducer = combineReducers({
    album,
    routing,
});

export default rootReducer;
