import React from 'react';
import Photo from './tvShowList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tvShows from '../actions/tvShows';



const tvShowPage = React.createClass({

	mySearch (value){ 
	    this.props.filterTVShows(value) 
	},

	handleChange(e, timer){
		console.log(this.searchInput.value);
		if(this.searchInput.value != ''){

			if (timer) {
		        clearTimeout(timer);
		    }
		    timer = setTimeout(()=> this.mySearch(this.searchInput.value), 400); 
		}
	},

	render(){
		var timer = 0;
		return (
			<ul className="tvShowPage">
			<span className="presentation">Select the tv show of the popular list, if you wanna see their details and you own seasons.</span>
			<span className="presentation">If don't see what you like, then search in the input.</span>
				<div className="search">
					<input ref={(input) => this.searchInput = input} type="text" placeholder="Type tvshow..." onChange={(e, timer) => this.handleChange(e)}></input>
				</div>
				{this.props.tvShows.map((tvShow, i) => <Photo {...this.props} key={i} i={i} tvShow={tvShow} />)}
			</ul>
		)
	}
});

function mapStateToProps (state, ownProps) {
  return {
    tvShows: state.tvShows
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(tvShows, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(tvShowPage);