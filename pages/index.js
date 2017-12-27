import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper';

import TestComponent from '../components/TestComponent';
import SignUp from '../components/SignUp';

import initStore from '../utils/store';

class Index extends React.Component {
	static async getInitialProps({ store }) {
		store.dispatch({ type: 'SUBMIT_NAME', text: 'dvk' });
		store.dispatch({ type: 'SUBMIT_NAME', text: 'hvk' });
		store.dispatch({ type: 'SIGNUP', user: { name: 'hvk'} });
		const res = await fetch('https://api.github.com/repos/ooade/NextSimpleStarter');
		const json = await res.json();
		return {
			// names: names
		};
	}
	render() {
		// const { names } = this.props
		return (
			<div>
					<TestComponent />
					<SignUp />
			</div>
		)
	}
}

export default withRedux(initStore)(Index)
