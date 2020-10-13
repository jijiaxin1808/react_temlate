import React, {useEffect} from 'react';
import axios from '@utils/axios';
const Oauth = () => {
	const getGithubOauth = () => {
		// window.open('https://github.com/login/oauth/authorize?client_id=dda2543c73dc2a9bbbf3');
	};
	useEffect(() => {
		axios.get('www.baidu.com');
	}, []);
	return (
		<div onClick={getGithubOauth}>点我进入github鉴权页</div>
	);
};
export default Oauth;