import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SliceState = {
	cart: number[]
}

const initialState: SliceState = { cart: [] }

export const slice = createSlice({
	name: "cartSlice",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<number>) => {
			state.cart.push(action.payload)
		}
	}
})

export const { addToCart } = slice.actions;
export default slice.reducer;