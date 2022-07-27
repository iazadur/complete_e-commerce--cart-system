import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import("../home/home"));


const Main = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};

export default Main;