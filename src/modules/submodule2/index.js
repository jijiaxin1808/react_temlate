import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
function App() {
	return (
		<React.Fragment>
			<Link to='/oauth'>to oauth</Link>
			<p>home</p>
			<Button type="primary">Button</Button>
		</React.Fragment>
	);
}

export default App;