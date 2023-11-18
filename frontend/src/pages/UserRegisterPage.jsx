import React from 'react';
import Register from '../components/Register/Register';

const UserRegisterPage = () => {
	return (
		<div className="max-h-screen w-full">
			<section className=" flex min-h-screen w-full items-center justify-center bg-gray-200">
				<Register />
			</section>
		</div>
	);
};

export default UserRegisterPage;
