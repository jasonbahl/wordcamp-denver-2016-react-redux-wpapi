import React, { Component } from 'react';

class SettingsNav extends Component {
	render() {
		return(
			<div className="pull-xs-right">
            	<div className="btn-group">
                    <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Preview Settings
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                    	<a className="dropdown-item" href="#">Show Site</a>
                    	<a className="dropdown-item" href="#">Show Date</a>
                    	<a className="dropdown-item" href="#">Show Excerpt</a>
                    </div>
				</div>
			</div>
		)
	}
}

export default SettingsNav;