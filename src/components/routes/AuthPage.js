import React, { Component } from 'react';
import SignInForm from '../Auth/SignInForm';
import SignUpForm from '../Auth/SignUpForm';
import { Route, NavLink } from 'react-router-dom';

class AuthPage extends Component {
	handleSignIn(values) {
		console.log('-- sign in', values);
	}
	handleSignUp(values) {
		console.log('-- sign up', values);
	}
	render() {
		return (
			<div>
				<h1>Auth Page</h1>
				<NavLink to='/auth/signin' activeStyle={{ color: 'red' }}>SignIn</NavLink><br/>
				<NavLink to='/auth/signup' activeStyle={{ color: 'red' }}>SignUp</NavLink>
				<Route path='/auth/signin' render={() => <SignInForm onSubmit={this.handleSignIn} />} />
				<Route path='/auth/signup' render={() => <SignUpForm onSubmit={this.handleSignUp} />} />
			</div>
		);
	}
}

export default AuthPage;
