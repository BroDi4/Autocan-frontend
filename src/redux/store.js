import { configureStore } from '@reduxjs/toolkit';

import filter from './slices/filterSlice';
import rangeFilter from './slices/rangeFilterSlice';

export const store = configureStore({
  reducer: {
    filter,
    rangeFilter,
  },
});
