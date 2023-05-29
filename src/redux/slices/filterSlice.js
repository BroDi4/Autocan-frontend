import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedAge: 0,
  selectedDrive: { name: 'Привод', value: '' },
  selectedModel: { name: 'Модель', value: '' },
  selectedBox: { name: 'Коробка', value: '' },
  selectedColor: { name: 'Цвет', value: '' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectedAge(state, action) {
      state.selectedAge = action.payload;
    },
    setSelectedDrive(state, action) {
      state.selectedDrive = action.payload;
    },
    setSelectedModel(state, action) {
      state.selectedModel = action.payload;
    },
    setSelectedBox(state, action) {
      state.selectedBox = action.payload;
    },
    setSelectedColor(state, action) {
      state.selectedColor = action.payload;
    },
  },
});

export const {
  setSelectedAge,
  setSelectedDrive,
  setSelectedModel,
  setSelectedBox,
  setSelectedColor,
  setPrice,
} = filterSlice.actions;

export default filterSlice.reducer;
