import React from 'react';
import { Link } from 'react-router';

const Spinner = React.createClass({
	render(){
		const { tvShow, configData, i } = this.props;

		return (
			<div className="loader">Loading...</div>
		)
	}
});

export default Spinner;