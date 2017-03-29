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

export function loadTVShowDetail(id) {  
  return function(dispatch) {
    return dataApi.getTVShowData(id).then(tvShowsData => {
      dispatch(loadTVShowDetailSuccess(tvShowsData));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadTVShowDetailSuccess(tvShowsData) {  
  console.log("loadTVShowDetailSuccess action y tvshowsData vale.....");
      console.log(tvShowsData);
  return {type: 'LOAD_TVSHOWS_DETAILS_SUCCESS', tvShowsData: tvShowsData};
}