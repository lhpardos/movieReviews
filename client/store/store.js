import { createStore, compse, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from '../reducers/rootReducer';

//import info from '../data/info';

// create an object for the default data
const defaultState = {
  //info
};

const store = createStore(
    rootReducer,
    //defaultState,
    applyMiddleware(thunk)
  );

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
