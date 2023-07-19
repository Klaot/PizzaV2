import { createSlice } from "@reduxjs/toolkit";
import { FetchPizzasParams } from "./pizzasSlice";

const initialState: FetchPizzasParams = {
  categoryId: 0,
  sortId: 0,
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortId: (state, action) => {
      state.sortId = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setSortId, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
