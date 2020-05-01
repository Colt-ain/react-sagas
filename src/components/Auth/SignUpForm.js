import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SignUpForm extends Component {
	handleSignIn(values) {
		console.log('-- sign in', values);
	}

	handleSignUp(values) {
		console.log('-- sign up', values);
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h2>SignUp</h2>
				<form onSubmit={handleSubmit}>
					<div>
						E-mail:
						<Field name='email' component='input'/>
					</div>
					<div>
						Password:
						<Field name='password' component='input'/>
					</div>
					<div>
						<input type='submit'/>
					</div>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'auth'
})(SignUpForm);
