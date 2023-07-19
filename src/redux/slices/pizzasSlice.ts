import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IPizza } from "./pizza.type";
import { getAllPizzas } from "../../api";

export interface IPizzaList {
  items: IPizza[];
  status: string;
}

export interface FetchPizzasParams {
  categoryId?: number;
  sortId?: number;
  searchValue?: string;
  filter?: FetchPizzasParams;
}

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async (params: FetchPizzasParams) => {
    try {
      const response = await getAllPizzas(params);
      return response;
    } catch (error) {
      throw new Error("Не удалось получить список ");
    }
  }
);

const initialState: IPizzaList = {
  items: [],
  status: "loading",
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state: IPizzaList) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state: IPizzaList, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
