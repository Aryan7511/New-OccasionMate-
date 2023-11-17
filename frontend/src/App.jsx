import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
	ErrorPage,
	HomePage,
	UserActivationPage,
	UserLoginPage,
	UserRegisterPage,
	PasswordResetPage,
	ForgotPasswordPage
} from './routes/Routes';

const App = () => {
	return (
		<div className="font-roboto">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/register" element={<UserRegisterPage />} />
				<Route path="/login" element={<UserLoginPage />} />
				<Route
          path="/activation/:activation_token"
          element={<UserActivationPage />}
        />
				{/* <Route path="/vendor-register" element={<VendorRegisterPage />} /> */}
				{/* <Route path="/vendor-login" element={VendorLoginPage} /> */}
				{/* <Route path="/proprietor-register" element={<ProprietorRegisterPage />} />*/}
				{/* <Route path="/proprietor-login" element={<ProprietorLoginPage />} />*/}
				<Route path="/password-reset" element={<PasswordResetPage />} />
				<Route path="/forgotpassword" element={<ForgotPasswordPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	);
};

export default App;
