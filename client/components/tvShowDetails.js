import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tvShowsData from '../actions/tvShows';

const tvShowDetails = React.createClass({
	componentWillMount() {
	    const { tvshowId } = this.props.params;

	    this.props.loadTVShowDetail(tvshowId);
	},
	render(){

		return (
			<div className="tvShowDetails-photo">
				<p>{this.props.tvShowsData.number_of_seasons}</p>
			</div>
		)
	}
});

function mapStateToProps (state, ownProps) {
  return {
    tvShowsData: state.tvShowsData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(tvShowsData, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(tvShowDetails);