import React from 'react';
import { Link } from 'react-router';

const tvShowList = React.createClass({
	render(){
		const { tvShow, i } = this.props;
		return (
			<li className="tvShowList">
				<Link to={`/view/${tvShow.id}`}>
					<span>{tvShow.name}</span>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
				</Link>
				
			</li>
		)
	}
});

export default tvShowList;