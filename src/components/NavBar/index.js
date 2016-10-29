import React, { Component } from 'react';

import SiteNav from './SiteNav';
import SettingsNav from './SettingsNav';

class NavBar extends Component {

	render(){
		return(
			<nav className="app-navbar navbar navbar-dark bg-inverse p-t-1">
                <a className="navbar-brand p-r-2" href="#">WordCamp Denver 2016</a>
                <SiteNav />
				<SettingsNav />
			</nav>
		)
	}

}

export default NavBar;