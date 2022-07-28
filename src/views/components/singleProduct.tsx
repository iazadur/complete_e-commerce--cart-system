import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { love, loveOutline, star } from '../../assets/icon';
import { addToCart } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';
import PlusMinus from './utils/plusMinus';

const SingleProduct = ({
	product,
}: {
	product: IProduct;
}) => {
	const { cartList } = useSelector((state: RootState) => state.cart)
	const already = cartList.find(p => p.id === product.id)
	const dispatch = useDispatch()
	const handleCart = () => {
		dispatch(addToCart({
			id: product.id,
			name: product.name,
			qty: 1,
			price:product.price,
		}))
	}
	return (
		<div className='min-h-[424px] max-h-[444px] bg-[#f1f1f1] rounded-sm w-full p-[20px] relative'>
			<div className=" absolute top-[26px] right-[22px] "><img src={product.favorite ? love : loveOutline} alt="" /></div>

			{product.sale && <div className=" absolute top-[20px] left-[20px] w-[49px] h-[24px] bg-pink-100 rounded text-[#DE3618] font-medium leading-5 text-xs flex justify-center items-center uppercase ">{product.sale ? "sale" : null}</div>}

			<div className="flex justify-center items-center h-[260px] ">
				<img src={product.image} alt="" />
			</div>
			<div className="h-[68px] mb-[20px]">
				<div className="">
					<p className='font-normal text-xs leading-[22px] text-[#959EAD]'>{product.category}</p>
				</div>
				<div className="">
					<p className='font-medium text-[16px] leading-[26px] text-[#161D25]'>{product.name}</p>
				</div>
				<div className="flex space-x-1">
					<img src={star} alt="" />
					<img src={star} alt="" />
					<img src={star} alt="" />
					<img src={star} alt="" />
					<img src={star} alt="" />
				</div>
			</div>
			<div className="flex justify-between items-center px-[12px] py-[10px] rounded-md border border-[#161D25]">
				{already?.id ?<PlusMinus item={already} />:<button onClick={() => handleCart()} className="font-normal text-sm leading-[24px] text-[#161D25]">Add to cart</button>}
				<div className="font-semibold text-sm leading-[24px] text-[#161D25]">${product.price} </div>
			</div>
		</div>
	);
};

export default SingleProduct;