import React, { Component } from 'react';

class ArticleDetail extends Component {
	render() {
		return(
			<div>
                <h1>Article Title</h1>
                <h4 className="small">November 5, 2016</h4>
                <hr/>
                <div>This is the full article content</div>
            </div>
		)
	}
}

export default ArticleDetail;