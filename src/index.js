import React from 'react';
import ReactDOM from 'react-dom';
// import App from './modules/submodule1/app';
import App from '@src/modules/submodule1/app';
import { Provider } from 'react-redux';
import store from './redux/store';
import {  BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App2 from '@src/modules/submodule2';
import Oauth from '@src/modules/oauth';
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<div>
					<nav>
						<ul>
							<Oauth />
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/users">Users</Link>
							</li>
						</ul>
					</nav>

					<Switch>
						<Route path="/about">
							<App/>
						</Route>
						<Route>
							<App2/>
						</Route>
						<Route path="/">
							<App2/>
						</Route>
					</Switch>
				</div>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);


