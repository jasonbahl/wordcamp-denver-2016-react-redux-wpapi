import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import configureStore from './state';

/**
 * Create the Redux store
 */
const store = configureStore();

/**
 * Render the app to <div id="app"></div>
 *
 * The <Provider> is what connects the <App> to the Redux store
 * to allow data to be accessed by any component in the App
 *
 */
ReactDOM.render(
	<Provider store={store}>
		<App />
    </Provider>,
    document.getElementById('app')
);