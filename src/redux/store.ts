import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { ThunkAction, Action } from "@reduxjs/toolkit";
import filter from "./slices/filter";
import cart from "./slices/cartSlice";
import pizzas from "./slices/pizzasSlice";

const store = configureStore({
  reducer: {
    filter,
    cart,
    pizzas,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false, // Избегаем сериализации неподдерживаемых типов в Redux Toolkit
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
