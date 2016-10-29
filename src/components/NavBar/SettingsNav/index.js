import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import * as settingActions from '../../../state/actions/settings';

class SettingsNav extends Component {

	handleOnClickDropownItem( key, value ) {

		let { settingsActions } = this.props;
        settingsActions.updateSetting( key, value );

	}

	renderDropdownItem( item, settings ) {

		let itemClass = classNames({
			'dropdown-item': true,
            'active': ! settings[item.setting]
		});

		return (
			<a className={itemClass} href="#0" key={item.setting} onClick={ this.handleOnClickDropownItem.bind( this, item.setting, ! settings[item.setting] ) }>{item.name}</a>
		)

	}

	render() {

		// Access the settings from the redux state tree
		let { settings } = this.props;

		return(
			<div className="pull-xs-right">
            	<div className="btn-group">
                    <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Preview Settings
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                    	{
	                    	settings.items.map( ( item ) => {
		                    	return this.renderDropdownItem( item, settings );
	                    	})
                    	}
                    </div>
				</div>
			</div>
		)
	}
}

/**
 * Define what parts of the Redux store this component should be connected to
 */
function mapStateToProps( state ) {
	return {
		sites: state.sites,
		settings: state.settings
	}
}

/**
 * Define what actions this component should be able to dispatch
 */
function mapDispatchToProps( dispatch ) {
	return {
		settingsActions: bindActionCreators( settingActions, dispatch )
	}
}

/**
 * Export the component, connected with the defined Redux state and actions
 */
export default connect( mapStateToProps, mapDispatchToProps )(SettingsNav);