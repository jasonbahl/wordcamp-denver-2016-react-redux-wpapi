import React, { Component } from 'react';

class NavBar extends Component {

	render(){
		return(
			<nav className="app-navbar navbar navbar-dark bg-inverse p-t-1">
                <a className="navbar-brand p-r-2" href="#">WordCamp Denver 2016</a>
                <ul className="nav navbar-nav">
	                <li className="nav-item"><a className="nav-link" href="#">Site 1</a></li>
					<li className="nav-item"><a className="nav-link" href="#">Site 2</a></li>
					<li className="nav-item"><a className="nav-link" href="#">Site 3</a></li>
					<li className="nav-item"><a className="nav-link" href="#">Site 4</a></li>
	            </ul>

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
			</nav>
		)
	}

}

export default NavBar;