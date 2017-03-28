import dataApi from '../api/dataApi';
import * as types from './actionTypes';

export function loadTVShows() {  
  return function(dispatch) {
    return dataApi.getAllTVShows().then(tvShows => {
      dispatch(loadTVShowsSuccess(tvShows));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadTVShowsSuccess(tvShows) {  
	console.log("loadTVShowsSuccess action y tvshows vale.....");
      console.log(tvShows.results);
  return {type: 'LOAD_TVSHOWS_SUCCESS', tvShows: tvShows.results};
}