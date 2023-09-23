import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store"

export interface Cart {
  totalItem: number
}
const initialState: Cart = { totalItem: 0 }

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      state.totalItem = state.totalItem + action.payload?.totalItem;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cartReducer;
export default cartSlice.reducer;