import React from 'react';
import { Link } from 'react-router-dom';
function App() {
	return (
		<React.Fragment>
			<Link to='/oauth'>to oauth</Link>
			<p>home</p>
		</React.Fragment>
	);
}

export default App;