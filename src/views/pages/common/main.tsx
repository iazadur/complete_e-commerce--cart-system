import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header';
const Home = React.lazy(() => import("../home/home"));


const Main = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
};

export default Main;