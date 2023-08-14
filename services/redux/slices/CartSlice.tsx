import { M_Meal } from "@/services/db/models/category";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SliceState = {
	cart: M_Meal[]
}

const initialState: SliceState = { cart: [] }

export const slice = createSlice({
	name: "cartSlice",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<M_Meal>) => {
			state.cart.push(action.payload)
		}
	}
})

export const { addToCart } = slice.actions;
export default slice.reducer;