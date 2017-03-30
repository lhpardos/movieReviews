import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tvShows from '../actions/tvShows';
import * as configData from '../actions/tvShows';
import Main from './Main';

function mapStateToProps(state){
	const { tvShows, configData } = state;
	return{
		tvShows,
		configData
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(Object.assign({}, tvShows, configData), dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;