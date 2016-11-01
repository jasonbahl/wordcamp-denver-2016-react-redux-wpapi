import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment-timezone';

class ArticleDetail extends Component {

    getActiveArticle() {

        let { articles } = this.props;
        let activeArticle = articles.items[0];

        if ( articles.activeArticle ) {

            articles.items.map(( article, i ) => {

                if ( article.uniqueIndex === articles.activeArticle ) {
                    activeArticle = article;
                }
                return activeArticle;

            });
        }

        return activeArticle;


    }

    render() {

        let { articles } = this.props;

        if ( false === articles.activeArticle ) {
            return(
                <div>Loading...</div>
            )
        } else {

            let article = this.getActiveArticle();
            let date = ( article.date ) ? moment( article.date_gmt ).tz( article.timezone ).format('MM/DD/YYYY h:mm a z') : '';

            return (
                <div>
                    <h1 dangerouslySetInnerHTML={{__html: article.title.rendered}}/>
                    <h4 className="small" dangerouslySetInnerHTML={{__html: date}}/>
                    <hr/>
                    <div dangerouslySetInnerHTML={{__html: article.content.rendered}}/>
                </div>
            )
        }
	}
}

function mapStateToProps( state ) {
    return {
        articles: state.articles
    }
}

export default connect( mapStateToProps )(ArticleDetail);