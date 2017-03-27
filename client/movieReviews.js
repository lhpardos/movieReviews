// let's go!

import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={MovieList}></IndexRoute>
			<Route path="/view/:movie" component={MovieDetails}></Route>
		</Route>
	</Router>
)
render(router, document.getElementById('root'));
