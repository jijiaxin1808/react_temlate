import React from 'react';
import ReactDOM from 'react-dom';
// import App from './modules/submodule1/app';
import App from '@src/modules/submodule1/app';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

