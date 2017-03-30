// let's go!

import React from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//import components
import App from './components/App';
import tvShowPage from './components/tvShowPage';
import tvShowDetails from './components/tvShowDetails';
import tvShowSeasonDetails from './components/tvShowSeasonDetails';

//import redux
import { Provider } from 'react-redux';
import store, { History } from './store/store';
import { loadTVShows , loadConfig } from './actions/tvShows';

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

store.dispatch(loadConfig());
store.dispatch(loadTVShows());


const router = (
	<Provider store={store}>
	    <Router history={History}>
			<Route path="/" component={App}>
				<IndexRoute component={tvShowPage}></IndexRoute>
				<Route path="/view/:tvshowId" component={tvShowDetails}></Route>
				<Route path="/view/:tvshowId/season/:seasonId" component={tvShowSeasonDetails}></Route>
			</Route>
		</Router>
	</Provider>
)
render(router, document.getElementById('root'));
