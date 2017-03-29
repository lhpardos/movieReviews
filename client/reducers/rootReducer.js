import { combineReducers } from 'redux';  
import tvShows from './tvshowsReducer';
import tvShowsData from './tvshowDataReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({ tvShows, tvShowsData, routing: routerReducer })

export default rootReducer;