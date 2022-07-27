import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { products } from '../../../assets/data';
import { RootState } from '../../../redux/store';
import SingleProduct from '../../components/singleProduct';


const Home = () => {
	const cartList = useSelector((state: RootState) => state.cart.cartList)
	const dispatch = useDispatch()
	return (
		<div className='container mx-auto'>
			<div className="grid grid-cols-4 gap-4">

				{
					products.map((item) => <SingleProduct key={item.id} product={item} onclick={function (id: string | undefined): void {
						throw new Error('Function not implemented.');
					} } />)
				}
			</div>
		</div>
	);
};

export default Home;

