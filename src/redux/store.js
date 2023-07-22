import { configureStore } from '@reduxjs/toolkit';

import filter from './slices/filterSlice';
import rangeFilter from './slices/rangeFilterSlice';
import auth from './slices/authSlice';
import category from './slices/categorySlice';
import page from './slices/pageSlice';

export const store = configureStore({
  reducer: {
    filter,
    rangeFilter,
    auth,
    category,
    page,
  },
});
