import React, {useEffect} from 'react';
import axios from '@utils/axios';
import { Link } from 'react-router-dom';
const Oauth = () => {
	const getGithubOauth = () => {
		window.open('https://github.com/login/oauth/authorize?client_id=dda2543c73dc2a9bbbf3');
	};
	useEffect(() => {
		axios.get('www.baidu.com');
	}, []);
	return (
		<React.Fragment>
			<Link to='/'>to /</Link>
			<div onClick={getGithubOauth}>点我进入github鉴权页</div>
		</React.Fragment>
	);
};
export default Oauth;