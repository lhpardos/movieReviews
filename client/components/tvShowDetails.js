import React from 'react';

const tvShowDetails = React.createClass({
	render(){
		const { tvshowId } = this.props.params;
		const i  = this.props.tvShows.findIndex((tvShow) => tvShow.name === tvshowId);
		const show = this.props.tvShows[i];
		return (
			<div className="tvShowDetails-photo">
				<p>{show.overview}</p>
			</div>
		)
	}
});

export default tvShowDetails;