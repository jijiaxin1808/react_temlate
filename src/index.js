import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App2 from '@src/modules/submodule2';
import Oauth from '@src/modules/oauth';
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/oauth">
						<Oauth />
					</Route>
					<Route>
						<App2/>
					</Route>
					<Route path="/">
						<App2/>
					</Route>
				</Switch>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);


