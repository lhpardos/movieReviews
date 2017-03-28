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

export function loadTVShowDetail() {  
  return function(dispatch) {
    return dataApi.getTVShowData().then(tvShowsData => {
      dispatch(loadTVShowDetailSuccess(tvShowsData));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadTVShowDetailSuccess(tvShowsData) {  
  console.log("loadTVShowDetailSuccess action y tvshows vale.....");
      console.log(tvShowsData.results);
  return {type: 'LOAD_TVSHOWS_SUCCESS', tvShowsData: tvShowsData.results};
}