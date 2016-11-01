import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as articleActions from './state/actions/articles';

import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';

class App extends Component {

    componentDidMount(){

        let { articleActions, sites } = this.props;
        articleActions.articlesFetch( sites );

    }

    render() {
		return(
			<div>
                <NavBar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4 p-l-0 p-r-0">
                            <ArticleList />
                        </div>
                        <div className="col-sm-8 p-r-0">
                            <div className="item-details">
                                <div className="row m-t-1 p-r-3 p-l-3 p-b-3">
                                    <div className="col-sm-12">
                                        <ArticleDetail />
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

function mapStateToProps( state ) {
    return {
        sites: state.sites
    }
}

function mapDispatchToProps( dispatch ) {
    return {
        articleActions: bindActionCreators( articleActions, dispatch )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(App);