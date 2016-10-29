import React, { Component } from 'react';

import ArticlePreview from '../ArticlePreview';

class ArticleList extends Component {
	render() {
		return(

			<div className="list-group item-list">
				<ArticlePreview />
            </div>
		)
	}
}

export default ArticleList;