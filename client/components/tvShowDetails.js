import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tvShowsData from '../actions/tvShows';
import { Link } from 'react-router';

const tvShowDetails = React.createClass({
	componentWillMount() {
	    const { tvshowId } = this.props.params;
	    //const seasonLength = this.props.tvShowsData.number_of_seasons;

	    this.props.loadTVShowDetail(tvshowId);
	},
	render(){
		const { tvshowId } = this.props.params;

		return (
			<div className="tvShowDetails-photo">
			{Array.apply(null, Array(this.props.tvShowsData.number_of_seasons)).map((item, i) =>
			 	<Link to={`/view/${tvshowId}/season/${i+1}`}>
					<p>Season {i+1}</p>
				</Link>
			)}

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