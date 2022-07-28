import { useDispatch } from "react-redux";
import { minus, plus } from "../../../assets/icon";
import { decrement, increment } from "../../../redux/slices/cartSlice";

const PlusMinus = ({ item }: { item: ICart }) => {
	const dispatch = useDispatch()
	return (
		<div className="h-[44px] w-[130px] rounded-[5px] border border-[#161D25] flex justify-around items-center " >
			<div onClick={() => dispatch(decrement(item?.id))} className="">
				<img src={minus} alt="" />
			</div>
			<div className="">
				<p>{item.qty}</p>
			</div>
			<div onClick={() => dispatch(increment(item?.id))} className="">
				<img src={plus} alt="" />
			</div>
		</div >
	);
};

export default PlusMinus;