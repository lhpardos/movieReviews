import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tvShowsSeason from '../actions/tvShows';
import { Link } from 'react-router';

const tvShowSeasonDetails = React.createClass({
	componentWillMount() {
	    const { seasonId } = this.props.params;
	    const { tvshowId } = this.props.params;
	    //const seasonLength = this.props.tvShowsSeason.number_of_seasons;

	    this.props.loadTVShowSeasonDetail(tvshowId, seasonId);
	},
	render(){
		const { seasonId } = this.props.params;
		return (
			<div className="tvShowSeasonDetails">
			Season {seasonId}
			{this.props.tvShowsSeason.episodes.map((tvShowSeason, i) => <h3>{i+1}. {tvShowSeason.name}</h3> )}

			</div>
		)
	}
});

function mapStateToProps (state, ownProps) {
  return {
    tvShowsSeason: state.tvShowsSeason
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(tvShowsSeason, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(tvShowSeasonDetails);