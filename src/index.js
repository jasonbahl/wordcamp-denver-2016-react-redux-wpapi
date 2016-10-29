import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import NavBar from './components/NavBar';

class App extends Component {

	render() {

		return(
			<div>

                <NavBar />

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