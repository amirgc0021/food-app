import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlice";

export const store =
	configureStore({
		reducer: {
			cartSlice
		},
		devTools: true,
	});

// export type AppStore = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;