import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function catReducer(state = initialState.tvShows, action) {  
  switch(action.type) {
    case types.LOAD_TVSHOWS_SUCCESS:
      return action.tvShows
    default: 
      return state;
  }
}