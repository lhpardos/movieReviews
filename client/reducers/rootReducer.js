import { combineReducers } from 'redux';  
import tvShows from './tvshowsReducer';
import tvShowsData from './tvshowDataReducer';
import tvShowsSeason from './tvshowSeasonReducer';
import configData from './configReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({ tvShows, tvShowsData, tvShowsSeason, configData, routing: routerReducer })

export default rootReducer;