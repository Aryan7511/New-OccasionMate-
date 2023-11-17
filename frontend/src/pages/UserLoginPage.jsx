import React from 'react';
import Login from '../components/Login/Login';

const UserLoginPage = () => {
	return (
		<div className="max-h-screen w-full">
			<section className=" flex min-h-screen w-full items-center justify-center bg-gray-200">
				<Login />
			</section>
		</div>
	);
};

export default UserLoginPage;
