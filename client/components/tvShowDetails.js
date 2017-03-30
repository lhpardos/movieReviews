import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tvShowsData from '../actions/tvShows';
import { Link } from 'react-router';
import Spinner from './Spinner';

const tvShowDetails = React.createClass({
	componentDidMount() {
	    const { tvshowId } = this.props.params;
	    //const seasonLength = this.props.tvShowsData.number_of_seasons;

	    this.props.loadTVShowDetail(tvshowId);
	},
	render(){
		const { tvshowId } = this.props.params;
		const { tvShowsData, configData} = this.props;
		if(tvShowsData.number_of_seasons === undefined){
			return (<Spinner />)
		}else{
			return (
				<div className="tvShowDetails">
					<div className="tvShowCard">
						<div className="poster">
							<img src={`${configData.secure_base_url}${configData.poster_sizes[2]}${tvShowsData.poster_path}`}/>
						</div>
						<div className="data">
							<h2><strong>{tvShowsData.name}</strong></h2>
							<p><strong>Description:</strong> {tvShowsData.overview}</p>
							<p><strong>Number of episodes:</strong> {tvShowsData.number_of_episodes}</p>
							<span><strong>Last date in air:</strong> {tvShowsData.last_air_date}</span>
						</div>
					</div>
					
					<div className="seasonList">
					<h2>Seasons</h2>
					{Array.apply(null, Array(tvShowsData.number_of_seasons)).map((item, i) =>
					 	<Link key={i} to={`/view/${tvshowId}/season/${i+1}`}>
							<span key={i}>Season {i+1}</span>
						</Link>
					)}

					</div>
				</div>
			)
		}
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