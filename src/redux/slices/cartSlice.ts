import { createSlice } from "@reduxjs/toolkit";
import { IPizza, IPizzaCart } from "./pizza.type";

const initialState: IPizzaCart = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state: IPizzaCart, action) {
      const findItem = state.items.find(
        (item: IPizza) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.count!++;
      } else {
        const newCount: any = {
          ...action.payload,
          count: 1,
        };
        state.items.push(newCount);
      }

      state.totalPrice = state.items?.reduce((sum: number, item: IPizza) => {
        return sum + item.price! * item.count!;
      }, 0);
    },

    itemMinus(state, action) {
      const findItem = state.items.find(
        (item: IPizza) => item.id === action.payload
      );
      if (findItem) {
        findItem.count!--;
        state.totalPrice = state.items.reduce((sum: number, item: IPizza) => {
          return sum - item?.price! * item?.count! * -1;
        }, 0);
      }
    },

    removeItem(state, action) {
      const filteredItem = state.items.filter(
        (item: IPizza) => item.id !== action.payload
      );
      state.items = filteredItem;
    },

    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartSelector = (state: any) => state.cart;

export const { addItem, removeItem, clearItem, itemMinus } = cartSlice.actions;

export default cartSlice.reducer;
