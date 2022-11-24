import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filter';
import cart from './slices/cartSlice';
import pizzas from './slices/pizzasSlice';

export const store = configureStore({
    reducer: {
        filter,
        cart,
        pizzas,
    }
});

