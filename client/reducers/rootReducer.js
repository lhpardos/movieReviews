import { combineReducers } from 'redux';  
import tvShows from './tvshowsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({ tvShows, routing: routerReducer })

export default rootReducer;