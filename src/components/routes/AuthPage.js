import React, { Component } from 'react';
import SignInForm from '../Auth/SignInForm';
import SignUpForm from '../Auth/SignUpForm';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { moduleName, signUp } from '../../ducks/auth';
import Loader from '../common/Loader';

class AuthPage extends Component {
	handleSignIn = (values) => {
		console.log('-- sign in', values);
	};

	handleSignUp = ({ email, password }) => {
		this.props.signUp(email, password);
	};

	render() {
		const { loading } = this.props;

		return (
			<div>
				<h1>Auth Page</h1>
				<NavLink to='/auth/signin' activeStyle={{ color: 'red' }}>SignIn</NavLink><br/>
				<NavLink to='/auth/signup' activeStyle={{ color: 'red' }}>SignUp</NavLink>
				<Route path='/auth/signin' render={() => <SignInForm onSubmit={this.handleSignIn} />} />
				<Route path='/auth/signup' render={() => <SignUpForm onSubmit={this.handleSignUp} />} />
				{loading && <Loader loading={loading} />}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loading: state[moduleName].loading
});

export default connect(mapStateToProps, { signUp })(AuthPage);
