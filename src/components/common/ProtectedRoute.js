import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { moduleName } from '../../ducks/auth';
import UnAthorized from './UnAthorized';

class ProtectedRoute extends Component {
	renderProtected = (routeProps) => {
		const { component: ProtectedComponent } = this.props;

		return <ProtectedComponent {...routeProps}/>;
	};

	render() {
		const { component, authorized, ...rest } = this.props;

		return (
			authorized ? <Route {...rest} render={this.renderProtected} /> : <UnAthorized />
		);
	}
}


export default connect(state => ({
	authorized: !!state[moduleName].user
}))(ProtectedRoute);
