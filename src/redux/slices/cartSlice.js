import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
        addItem (state, action) {
            const findItem = state.items.find(item => item.id === action.payload.id)
            if (findItem) {
                findItem.count++;
            }   else {
                state.items.push({
                    ...action.payload, count: 1,
                })
            }

            state.totalPrice = state.items.reduce((sum, item) => {
                        return sum + (item.price * item.count);
            }, 0)
        },

        itemMinus (state, action) {
            const findItem = state.items.find(item => item.id === action.payload);
            if (findItem) {
                findItem.count--
            state.totalPrice = state.items.reduce((sum, item) => {
                    return sum - (item.price * item.count) * -1;
            }, 0)
            }
        },

        removeItem (state, action) {
            const filteredItem = state.items.filter(item => item.id !== action.payload);
            state.items = filteredItem;
        },

        clearItem (state, action) {
            state.items = [];
            state.totalPrice = 0;
        }
    }
})

export const cartSelector = (state) => state.cart

export const { addItem, removeItem, clearItem, itemMinus } = cartSlice.actions

export default cartSlice.reducer