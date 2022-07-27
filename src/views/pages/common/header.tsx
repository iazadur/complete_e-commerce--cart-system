import { useState } from "react";
import { useSelector } from "react-redux";
import { cart } from "../../../assets/icon";
import { RootState } from "../../../redux/store";
import Overly from "../../components/overly";

const Header = () => {
	const [open, setOpen] = useState<boolean>(false)
	const { cartList } = useSelector((state: RootState) => state.cart)
	return (
		<div className="fixed top-0 left-0 right-0 h-[60px] shadow-lg bg-white z-[5]">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="font-extrabold text-3xl ">Tixio</div>
					<div onClick={() => setOpen(!open)} className="relative py-1 px-2">
						<img src={cart} alt="" className="h-10 w-10" />
						<p className="absolute top-0 right-0 rounded-full border border-gray-100 bg-red-300 text-white px-1 text-xs">{cartList?.length}</p>
					</div>
				</div>
			</div>
			<Overly open={open} setOpen={setOpen} />
		</div>
	);
};

export default Header;