import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: 0,
  year: 2000,
  mileage: 0,
  power: 70,
};

export const rangeFilterSlice = createSlice({
  name: 'rangeFilter',
  initialState,
  reducers: {
    setPrice(state, action) {
      state.price = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    },
    setMileage(state, action) {
      state.mileage = action.payload;
    },
    setPower(state, action) {
      state.power = action.payload;
    },
    setToInitialRangeFilter(state) {
      state.price = initialState.price;
      state.year = initialState.year;
      state.mileage = initialState.mileage;
      state.power = initialState.power;
    },
  },
});

export const { setPrice, setYear, setMileage, setPower, setToInitialRangeFilter } =
  rangeFilterSlice.actions;

export default rangeFilterSlice.reducer;
