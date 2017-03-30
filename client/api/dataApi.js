class dataApi {  
  static getAllTVShows() {
    return fetch('https://api.themoviedb.org/3/tv/popular?api_key=cf0235f77162a0234a1243489af0f917&language=en-US&page=1').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getTVShowData(param) {
    return fetch('https://api.themoviedb.org/3/tv/'+ param +'?api_key=cf0235f77162a0234a1243489af0f917&language=en-US').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getTVShowSeason(id, season){
    return fetch('https://api.themoviedb.org/3/tv/'+ id +'/season/'+ season +'?api_key=cf0235f77162a0234a1243489af0f917&language=en-US').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getConfigData(){
    return fetch('https://api.themoviedb.org/3/configuration?api_key=cf0235f77162a0234a1243489af0f917').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  
}

export default dataApi;