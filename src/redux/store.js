import { configureStore } from '@reduxjs/toolkit';

import filter from './slices/filterSlice';
import rangeFilter from './slices/rangeFilterSlice';
import auth from './slices/authSlice';
import category from './slices/categorySlice';

export const store = configureStore({
  reducer: {
    filter,
    rangeFilter,
    auth,
    category,
  },
});
