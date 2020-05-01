import React from 'react';

function ErrorField(props) {
	const { input, type, meta: { error, touched } } = props;
	const errorText = (error && touched) && <div style={{ color: 'red' }}>{error}</div>;

	return (
		<div>
			<label htmlFor="">{input.name}</label>
			<input type={type} {...input}/>
			{ errorText }
		</div>
	);
}

export default ErrorField;
