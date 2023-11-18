import React from 'react';
import { ProprietorRegister } from '../../components/Venue/ProprietorRegister';

const ProprietorRegisterPage = () => {
	return (
		<div className="max-h-screen w-full">
			<section className=" flex min-h-screen w-full items-center justify-center bg-gray-200">
				<ProprietorRegister />
			</section>
		</div>
	);
};

export default ProprietorRegisterPage;
