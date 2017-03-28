import React from 'react';
import { Link } from 'react-router';

const tvShowList = React.createClass({
	render(){
		const { tvShow, i } = this.props;
		return (
			<div className="tvShowDetails-photo">
				<Link to={`/view/${tvShow.name}`}>
					<p>{tvShow.name}</p>
				</Link>
				
			</div>
		)
	}
});

export default tvShowList;