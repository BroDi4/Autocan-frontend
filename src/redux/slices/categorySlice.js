import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchCategory = createAsyncThunk('category/fetchCategory', async () => {
  const { data } = await axios.get('/categories');
  return data;
});

const initialState = {
  data: [],
  status: 'loading',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: {
    [fetchCategory.pending]: (state) => {
      state.data = [];
      state.status = 'loading';
    },
    [fetchCategory.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    },
    [fetchCategory.error]: (state) => {
      state.data = [];
      state.status = 'error';
    },
  },
});

export default categorySlice.reducer;
