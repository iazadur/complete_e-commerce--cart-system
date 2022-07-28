import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { products } from '../../../assets/data';
// import { RootState } from '../../../redux/store';
import SingleProduct from '../../components/singleProduct';


const Home = () => {
	// const cartList = useSelector((state: RootState) => state.cart.cartList)
	// const dispatch = useDispatch()
	return (
		<div className='container mx-auto'>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-0 gap-2 sm:gap-4">

				{
					products.map((item) => <SingleProduct key={item.id} product={item} />)
				}
			</div>
		</div>
	);
};

export default Home;

