import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UnAthorized extends Component {
	render() {
		return (
			<div>
				<h1>UnAuthorized, please <Link to='/auth/signin' >Sign In</Link> </h1>
			</div>
		);
	}
}

export default UnAthorized;
