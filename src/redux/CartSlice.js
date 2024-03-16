import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    price: 0,
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
      state.price +=
        parseInt(action.payload?.card?.info?.price / 100) ||
        parseInt(action.payload?.card?.info?.defaultPrice / 100);
    },
    removeItem: (state, action) => {
      // const item = state.items.filter((item) => item !== action.payload);
      state.items.splice(action.payload, 1);
      state.price -=
        parseInt(action.payload?.card?.info?.price / 100) ||
        parseInt(action.payload?.card?.info?.defaultPrice / 100);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
