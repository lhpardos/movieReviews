import React from 'react';
import Photo from './tvShowList';

const tvShowPage = React.createClass({
	render(){
		
		return (
			<ul className="tvShowPage">
				{this.props.tvShows.map((tvShow, i) => <Photo {...this.props} key={i} i={i} tvShow={tvShow} />)}
			</ul>
		)
	}
});

export default tvShowPage;