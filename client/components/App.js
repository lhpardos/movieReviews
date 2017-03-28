import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tvShows from '../actions/tvShows';
import Main from './Main';

function mapStateToProps(state){
	return{
		tvShows: state.tvShows
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(tvShows, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;