/**
 * The article preview component renders details about the article, but what is displayed can be controlled by
 * the "Preview Settings" in the navbar (or potentially any other component that triggers the settings to update their values).
 * So this component needs to be aware of the settings in the Redux store, so that whenever anything causes the
 * settings to change, this component will re-render accordingly.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArticlePreview extends Component {
	render() {

		// Get the settings from the connected Redux store
		let { settings } = this.props;

		return(
			<a href="#" className="list-group-item list-group-item-action">

				{ (settings.showSite) ? <h4 className="list-group-item-text p-t-1 p-b-1 small">Site 1</h4> : '' }
                <h5 className="list-group-item-heading">Article Title</h5>
                { ( settings.showDate ) ? <h4 className="list-group-item-text p-t-1 small">November 5, 2016</h4> : '' }
                { ( settings.showExcerpt ) ? <p className="list-group-item-text p-t-1">This is the article excerpt</p> : '' }

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

export default connect( mapStateToProps )(ArticlePreview);