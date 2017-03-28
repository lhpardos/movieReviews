// let's go!

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import tvShowPage from './components/tvShowPage';
import tvShowDetails from './components/tvShowDetails';
import store, { History } from './store/store';
import { Provider } from 'react-redux';
import { loadTVShows } from './actions/tvShows';

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

store.dispatch(loadTVShows());


const router = (
	<Provider store={store}>
	    <Router history={History}>
			<Route path="/" component={App}>
				<IndexRoute component={tvShowPage}></IndexRoute>
				<Route path="/view/:tvshowId" component={tvShowDetails}></Route>
			</Route>
		</Router>
	</Provider>
)
render(router, document.getElementById('root'));
