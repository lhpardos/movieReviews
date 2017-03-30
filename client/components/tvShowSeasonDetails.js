import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tvShowsSeason from '../actions/tvShows';
import { Link } from 'react-router';
import Spinner from './Spinner';

const tvShowSeasonDetails = React.createClass({
	componentDidMount() {
	    const { seasonId } = this.props.params;
	    const { tvshowId } = this.props.params;
	    //const seasonLength = this.props.tvShowsSeason.number_of_seasons;

	    this.props.loadTVShowSeasonDetail(tvshowId, seasonId);
	},
	render(){
		const { seasonId } = this.props.params;
		const { tvShowsSeason, configData } = this.props;

		if(tvShowsSeason.episodes === undefined){
			return (<Spinner />)
		}else{
			return (
			<div className="tvShowSeasonDetails">
				<div className="poster">
					<img src={`${configData.secure_base_url}${configData.poster_sizes[2]}${tvShowsSeason.poster_path}`}/>
				</div>
				<div className="episodes">
				<h2> Episodes list: {tvShowsSeason.name}</h2>
					{tvShowsSeason.episodes.map((tvShowSeason, i) => 
						<h3 key={i}>{i+1}. {tvShowSeason.name}</h3> 
					)}
				</div>
			</div>)
		}
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