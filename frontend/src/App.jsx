import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  
	return (
	  <>
		<Routes>
		  <Route path="/" element={<Page1 />} />
		  <Route path="/page" element={<Page2 />} />
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
	  </>
	);
  };
  

export default App;
