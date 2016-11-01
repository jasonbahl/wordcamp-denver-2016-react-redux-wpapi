import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticlePreview from '../ArticlePreview';

class ArticleList extends Component {

	renderArticlePreview( article, i, uniqueId, activeArticle, activeSite ) {

		return (
			<ArticlePreview key={ uniqueId } i={i} uniqueId={ uniqueId } article={article} active={activeArticle} />
		)

	}

	render() {

		let { articles, activeSite } = this.props;
		return(

			<div className="list-group item-list">
				{
					articles.items.map( ( article, i ) => {

						let uniqueId = article.site.id + article.id;
						let activeArticle = articles.activeArticle;

						if ( activeSite === article.site ) {

							return (
								this.renderArticlePreview( article, i, uniqueId, activeArticle, activeSite )
							)

						} else {
							return false;
						}

					})

				}
			</div>
		)
	}
}

function mapStateToProps( state ) {
	return {
		activeSite: state.sites.activeSite,
		articles: state.articles
	}
}

export default connect( mapStateToProps )(ArticleList);