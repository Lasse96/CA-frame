import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.total = state.total + action.payload.price;
    },
    removeLast: (state) => {
      let index = state.items.length - 1;
      state.total = state.total - state.items[index].price;
      state.items.pop();
    },
    success: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeLast, success } = cartSlice.actions;

export default cartSlice.reducer;
