import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

	render() {

		return(
			<div>

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

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4 p-l-0 p-r-0">

                            <div className="list-group item-list">

								<a href="#" className="list-group-item list-group-item-action">
					                <h4 className="list-group-item-text p-t-1 p-b-1 small">Site 1</h4>
					                <h5 className="list-group-item-heading">Article Title</h5>
					                <h4 className="list-group-item-text p-t-1 small">November 5, 2016</h4>
					                <p className="list-group-item-text p-t-1">This is the article excerpt</p>
					            </a>

                            </div>

                        </div>
                        <div className="col-sm-8 p-r-0">
                            <div className="item-details">
                                <div className="row m-t-1 p-r-3 p-l-3 p-b-3">
                                    <div className="col-sm-12">

                                        <div>
						                    <h1>Article Title</h1>
						                    <h4 className="small">November 5, 2016</h4>
						                    <hr/>
						                    <div>This is the full article content</div>
						                </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
		)

	}

}

ReactDOM.render( <App />, document.getElementById('app'));