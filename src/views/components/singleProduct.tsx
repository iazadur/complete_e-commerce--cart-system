import React from 'react';

const SingleProduct = ({
	product,
	onclick,
}: {
	product: IProduct;
	onclick: (id: string | undefined) => void;
}) => {
	return (
		<div className='h-[424px] bg-pink-300 rounded-sm w-full'>
			<div className="">
				<img src={product.image} alt="" />
			</div>
			<div className="">
				<div className="">
					<p>{ product.category}</p>
				</div>
				<div className="">
					<p>{ product.name}</p>
				</div>
				<div className="">
					<p>{ product.rating}</p>
				</div>
			</div>
			<div className="flex justify-between p-2">
				<div className="">{product.price}</div>
			</div>
		</div>
	);
};

export default SingleProduct;