import React, { Component } from 'react';

class ArticleList extends Component {
	render() {
		return(

			<div className="list-group item-list">
				<a href="#" className="list-group-item list-group-item-action">
					<h4 className="list-group-item-text p-t-1 p-b-1 small">Site 1</h4>
	                <h5 className="list-group-item-heading">Article Title</h5>
	                <h4 className="list-group-item-text p-t-1 small">November 5, 2016</h4>
	                <p className="list-group-item-text p-t-1">This is the article excerpt</p>
	            </a>
            </div>
		)
	}
}

export default ArticleList;