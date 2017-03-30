import React from 'react';
import { Link } from 'react-router';

const tvShowList = React.createClass({
	render(){
		const { tvShow, configData, i } = this.props;

		return (
			
				<Link to={`/view/${tvShow.id}`}>
				<li className="tvShowList">
					<span>{tvShow.name}</span>
					<span className="fa fa-chevron-right"></span>
				</li>
				</Link>
			
		)
	}
});

export default tvShowList;