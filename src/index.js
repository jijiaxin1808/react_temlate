import React from 'react';
import ReactDOM from 'react-dom';
// import App from './modules/submodule1/app';
import App from '@src/modules/submodule1/app';
import { Provider } from 'react-redux';
import store from './redux/store';
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

