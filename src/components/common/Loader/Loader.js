import React from 'react';

function Loader({loading}) {

	return (
		loading ? <h2>...loading</h2> : null
	);
}

export default Loader;
