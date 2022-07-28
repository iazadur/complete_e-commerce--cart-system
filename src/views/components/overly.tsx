import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import SingleCartItem from './singleCartItem'
import { bag, close } from '../../assets/icon'

export default function Overly({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

	const { cartList } = useSelector((state: RootState) => state.cart)

	const priceList = cartList?.map(p => p.qty * p.price)
	const total = priceList.reduce(
		(previousValue, currentValue) => previousValue + currentValue,
		0
	);
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto relative w-screen max-w-[610px]">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-500"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-500"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">

										</div>
									</Transition.Child>
									<div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
										<div className="px-4 sm:px-6">
											<Dialog.Title className="text-lg font-medium text-gray-900 flex items-center">
												<div onClick={() => setOpen(false)} className=""><img src={close} alt="" /></div>
												<div className="flex-1 flex justify-center items-center gap-2">
													<div className="font-medium text-[#000000] text-[22px] leading-[32]]">My Cart</div>
													<div className="">
														<img src={bag} alt="" />
													</div>
												</div>
											</Dialog.Title>
										</div>
										<div className="relative mt-6 flex-1 px-4 sm:px-6">
											{/* Replace with your content */}
											<div className="absolute inset-0 px-4 sm:px-6">
												{
													cartList.map(res => <SingleCartItem key={res.id} item={res} />)
												}
											</div>
											{/* /End replace */}
										</div>
										<div className="">
											<div className="h-[50px] bg-[#E8F0D6] flex justify-center items-center mx-[32px] rounded">
												<p className='text-[16px] font-normal leading-[26px] text-[#161D25]'>Hey get Free shipping on order over 250$</p>
											</div>
											<div className="flex justify-between items-center mt-[32px] mx-[32px] ">
												<div className="flex flex-col items-start space-y-1">
													<p className='text-[18px] leading-[18px] font-normal text-[#959EAD] '>Sub total:</p>
													<p className='text-[20px] leading-[30px] font-semibold text-[#161D25]'>${total}</p>
												</div>
												<div className="w-[333px] h-[52px] bg-[#5C6AC4] flex justify-center items-center rounded ">
													<p className='text-[16px] font-medium leading-[26px] text-[#fff]'>Checkout</p>
												</div>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
