import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface CartState {
	cartList: { id: number, name: string, qty: number }[]
}

const initialState: CartState = {
	cartList: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.cartList.push( {
				id: 2, name: "string2", qty: 2
			})
		},
		decrement: (state) => {
			state.cartList.pop()
		},
		
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer