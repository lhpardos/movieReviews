import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function configReducer(state = initialState.configData, action) {  
  switch(action.type) {
    case types.LOAD_CONFIG_SUCCESS:
      return action.configData
    default: 
      return state;
  }
}