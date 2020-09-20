import React, { useEffect } from 'react';
import logo from './logo.svg';
import './app.css';
import Loading from '@comp/Loading';
import { initSession } from '@src/redux/actions';
import { connect } from 'react-redux';
function App(props) {
	useEffect(()=>{
		const useInfo = {
			userId: 'userId',
			userName: 'userName'
		};
		// eslint-disable-next-line react/prop-types
		props.init(useInfo);
	},[]);
	useEffect(()=>{
		// console.log({props});
	},[props]);
	return (
		<div className='App'>
			<Loading />
			<p>{props.userInfo.userId}</p>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
            Edit 
					<code>
            src/App.tsx
					</code> 
        and save to reload.
				</p>
				<a  className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
          Learn React
				</a>
			</header>
		</div>
	);
}
const mapStateToProps = state => {
	return state;
};
const mapDispatchToProps = (dispatch) => {
	return {
		init: (...args) => dispatch(initSession(...args)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
