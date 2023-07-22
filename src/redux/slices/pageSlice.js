import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  pageCount: 1,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    nextPage(state) {
      if (!(state.currentPage + 1 > state.pageCount)) {
        state.currentPage++;
      }
    },
    prevPage(state) {
      if (!(state.currentPage - 1 < 1)) {
        state.currentPage--;
      }
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
  },
});

export const { nextPage, prevPage, setPageCount } = pageSlice.actions;

export default pageSlice.reducer;
