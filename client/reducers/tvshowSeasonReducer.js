import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function tvshowSeasonReducer(state = initialState.tvShowsSeason, action) {  
  switch(action.type) {
    case types.LOAD_TVSHOWS_SEASON_DETAILS_SUCCESS:
      return action.tvShowsSeason
    default: 
      return state;
  }
}