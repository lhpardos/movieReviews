import React from 'react';
import { Link } from 'react-router';

const tvShowList = React.createClass({
	render(){
		const { tvShow, configData, i } = this.props;
		return (
			<li className="tvShowList">
				<Link to={`/view/${tvShow.id}`}>
					<span>{tvShow.name}</span>
					<span className="fa fa-chevron-right"></span>
				</Link>
				
			</li>
		)
	}
});

export default tvShowList;