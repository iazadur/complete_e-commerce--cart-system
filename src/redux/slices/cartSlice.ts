// import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface CartState {
	cartList: ICart[]
}

const initialState: CartState = {
	cartList: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: {
			payload: ICart
		}) => {
			const result = state.cartList.find((item) => item?.id === action.payload.id)
			if (result) {
				result.qty = action.payload.qty ? result.qty + action.payload.qty : result.qty + 1;
			} else {
				state.cartList.push({ ...action.payload, qty: action.payload.qty || 1 });
			}
		},
		increment: (state, action: {
			payload:number
		}) => {
			const cartItem = state.cartList?.find((item) => item.id === action.payload);
			if (cartItem) {
				cartItem.qty = cartItem.qty + 1;
			}
		},
		decrement: (state, action: {
			payload: number
		}) => {
			const result = state.cartList.find((item) => item.id === action.payload);


			if (result?.qty === 1) {
				state.cartList = state.cartList.filter((i) => i.id !== action.payload)
			}
			if (result!.qty >= 2) {
				result!.qty -=  1;
			}
		},
		removeFromCart: (state, action: {
			payload: number
		}) => {
			const cartItem = state.cartList?.find((item) => item.id === action.payload);
			if (cartItem) {
				state.cartList = state.cartList.filter((i) => i.id !== action.payload)
			}
		},

	},
})

// Action creators are generated for each case reducer function
export const { addToCart, increment, decrement, removeFromCart } = cartSlice.actions

export default cartSlice.reducer