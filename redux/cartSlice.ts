import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Dish>) => {
      const cartItem = state.cartItems.find(
        (el) => el.dish?.dish_id === action.payload?.dish_id
      );
      if (cartItem) cartItem.qty++;
      else {
        state.cartItems.push({
          dish: action.payload,
          qty: 1,
        });
      }
    },

    decrement: (state, action: PayloadAction<Dish>) => {
      const cartItem = state.cartItems.find(
        (el) => el.dish?.dish_id === action.payload?.dish_id
      );
      if (cartItem) {
        cartItem.qty--;
        if (cartItem.qty === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.dish?.dish_id !== action.payload?.dish_id
          );
        }
      }
    },
  },
});

const cartItems = (state: RootState) => state.cart?.cartItems;

export const dishQtyInCartSelector = createSelector(
  [cartItems, (cartItems, productId: string) => productId],
  (cartItems, productId) =>
    cartItems.find((el) => el.dish?.dish_id === productId)?.qty
);

export const totalCartItemsSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce((total: number, curr: CartItem) => (total += curr.qty), 0)
);

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
