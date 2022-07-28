import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../../assets/icon';
import { removeFromCart } from '../../redux/slices/cartSlice';
import { get_product } from './utils/get-product';
import PlusMinus from './utils/plusMinus';

const SingleCartItem = ({ item }: { item: ICart }) => {
	const result = get_product(item.id)
	const dispatch = useDispatch()

	const removeItem = () => {
		dispatch(removeFromCart(item.id))
	}
	return (
		<div className='flex py-[30px] border-b-2 border-[#E9E9E9]'>
			<div className="h-[120px] w-[120px] bg-[#E8F0D6] rounded-[5px] ">
				<img src={result?.image} alt="" className='h-full w-full' />
			</div>
			<div className="flex flex-col justify-around flex-1 px-4">
				<div className="flex justify-between items-center w-full">
					<div className="">
						<p className='font-medium text-[18px] leading-[28px] text-[#161D25] flex-1'>{item.name}</p>
					</div>

					<div onClick={() => removeItem()} className="">
						<img src={remove} alt="" />
					</div>
				</div>
				<div className="font-normal text-sm leading-[24px] text-[#959EAD]"><p><span className='text-[#161D25]'>Size:</span>Medium</p></div>
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2">
						<p className='font-medium text-[18px] leading-[28px] text-[#161D25]'>${result?.price}</p>
						<p className='font-normal text-sm leading-[24px] text-[#959EAD] line-through'>${result?.price}</p>
					</div>

					{/* Increment Decrement  */}
					<PlusMinus item={item} />

				</div>
			</div>
		</div>
	);
};

export default SingleCartItem;