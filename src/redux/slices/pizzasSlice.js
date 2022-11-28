import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios'

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus', 
      async (params, thunkApi) => {
      const {categoryId, sortId, searchValue} = params
      const {data} = await Axios.get(`https://limitless-tundra-86000.herokuapp.com/${categoryId}?sortType=${sortId}&${'search='+ searchValue.toLowerCase()}`)
      
      return data
    }
  )

 const initialState =  {
    items: [],
    status: 'loading',
}

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
        state.items = action.payload;
    }
  },
  extraReducers: {
    [fetchPizzas.pending]: (state, action) => {
        state.status = 'loading'
        state.items = []
    },
    [fetchPizzas.fulfilled]: (state, action) => {
        state.items = action.payload
        state.status = 'success'
    },
    [fetchPizzas.rejected]: (state, action) => {
        state.status = 'error'
        state.items = []
    },
  }
})


export const {setItems} = pizzasSlice.actions

export default pizzasSlice.reducer
