import React from 'react';
import Photo from './tvShowList';

const tvShowPage = React.createClass({
	render(){
		
		return (
			<div className="tvShowPage-photo">
				{this.props.tvShows.map((tvShow, i) => <Photo {...this.props} key={i} i={i} tvShow={tvShow} />)}
			</div>
		)
	}
});

export default tvShowPage;