import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../cartSlice/cartSlice";
import { User } from "../userSlice/userSlice";

export interface Order {
  cart: Cart[];
  totalPrice: number;
  user: User;
  priority: string;
}

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    createOrder(state, action) {
      state.orders = [...state.orders, action.payload];
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
