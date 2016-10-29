import React, { Component } from 'react';

class SiteNav extends Component {
	render() {
		return(
			<ul className="nav navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#">Site 1</a></li>
				<li className="nav-item"><a className="nav-link" href="#">Site 2</a></li>
				<li className="nav-item"><a className="nav-link" href="#">Site 3</a></li>
				<li className="nav-item"><a className="nav-link" href="#">Site 4</a></li>
            </ul>
		)
	}
}

export default SiteNav;