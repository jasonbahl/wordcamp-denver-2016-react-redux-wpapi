/**
 * The article preview component renders details about the article, but what is displayed can be controlled by
 * the "Preview Settings" in the navbar (or potentially any other component that triggers the settings to update their values).
 * So this component needs to be aware of the settings in the Redux store, so that whenever anything causes the
 * settings to change, this component will re-render accordingly.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import moment from 'moment';
import 'moment-timezone';

import * as articleActions from '../../state/actions/articles';

class ArticlePreview extends Component {

	handleClickItem( uniqueId ) {

		// Get date from the props
		let { articleActions } = this.props;

		// Set the active article
		articleActions.setActiveArticle( uniqueId );

	}

	render() {

		// Get the settings from the connected Redux store
		let { article, active, settings } = this.props;

		let itemClass = classNames({
			'list-group-item': true,
			'list-group-item-action': true,
			'active': ( article.uniqueIndex === active ) ? true : false
		});

		let date = ( article.date ) ? moment( article.date_gmt ).tz( article.timezone ).format('MM/DD/YYYY h:mm a z') : '';

		return(
			<a href="#" className={itemClass} onClick={this.handleClickItem.bind( this, article.uniqueIndex ) }>

				{ (settings.showSite) ? <h4 className="list-group-item-text p-t-1 p-b-1 small">Site 1</h4> : '' }
                <h5 className="list-group-item-heading" dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
                { ( settings.showDate ) ? <h4 className="list-group-item-text p-t-1 small" dangerouslySetInnerHTML={{__html: date }}/> : '' }
                { ( settings.showExcerpt ) ? <p className="list-group-item-text p-t-1"  dangerouslySetInnerHTML={{__html: article.excerpt.rendered}} /> : '' }

            </a>
		)
	}
}

/**
 * Define which parts of the Redux store the component should be connected to
 */
function mapStateToProps( state ) {
	return {
		settings: state.settings
	}
}

function mapDispatchToProps( dispatch ){
	return {
		articleActions: bindActionCreators( articleActions, dispatch )
	}
}

/**
 * Export the component, connected with the defined Redux state
 */
export default connect( mapStateToProps, mapDispatchToProps )(ArticlePreview);