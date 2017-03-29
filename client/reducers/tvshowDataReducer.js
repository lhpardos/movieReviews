import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function tvshowDataReducer(state = initialState.tvShowsData, action) {  
  switch(action.type) {
    case types.LOAD_TVSHOWS_DETAILS_SUCCESS:
      return action.tvShowsData
    default: 
      return state;
  }
}