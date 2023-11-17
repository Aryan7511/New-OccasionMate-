import React from 'react';
import { toast } from 'react-toastify';

const Page1 = () => {
	const notify = () => toast.success('Wow so easy !');
	return (
		<>
			<div>Page1</div>
			<button onClick={notify}>click me</button>
		</>
	);
};

export default Page1;
