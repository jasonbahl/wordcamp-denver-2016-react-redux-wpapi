import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import * as siteActions from '../../../state/actions/sites';

class SiteNav extends Component {

	componentDidMount(){
		let { sites, siteActions } = this.props;
		sites.items.map( ( site, i ) => {

			if ( 3 === site.id ) {
				siteActions.setActive(site);
			}

		});
	}

	handleNavClick( site ) {

		let { siteActions } = this.props;
		siteActions.setActive( site );

	}

	render() {

		let { sites } = this.props;

		return(
			<ul className="nav navbar-nav">
				{
					sites.items.map( ( site, i ) => {

						let itemClass = classNames({
							'nav-item': true,
							'active': ( sites.activeSite === site ) ? true : false
						});

						return (
							<li className={itemClass} key={i}><a className="nav-link" href="#" onClick={ this.handleNavClick.bind( this, site ) }>{ site.name }</a></li>
						)

					})
				}

            </ul>
		)
	}
}

function mapStateToProps( state ) {
	return {
		sites: state.sites
	}
}

function mapDispatchToProps( dispatch ) {
	return {
		siteActions: bindActionCreators( siteActions, dispatch )
	}
}

export default connect( mapStateToProps, mapDispatchToProps )(SiteNav);