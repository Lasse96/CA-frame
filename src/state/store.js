import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./checkout/checkoutSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
