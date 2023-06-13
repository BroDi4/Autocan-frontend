import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (value) => {
  const { data } = await axios.post('/user/login', value);
  return data;
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (value) => {
  const { data } = await axios.post('/user/register', value);
  return data;
});

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async () => {
  const { data } = await axios.get('/user');
  return data;
});

const initialState = {
  userdata: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearStatus(state) {
      state.status = 'loading';
    },
    logout(state) {
      state.userdata = null;
    },
  },
  extraReducers: {
    [fetchLogin.pending]: (state) => {
      state.userdata = null;
      state.status = 'loading';
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.userdata = action.payload;
      state.status = 'loaded';
    },
    [fetchLogin.rejected]: (state) => {
      state.status = 'error';
      state.userdata = null;
    },
    [fetchRegister.pending]: (state) => {
      state.userdata = null;
      state.status = 'loading';
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.userdata = action.payload;
      state.status = 'loaded';
    },
    [fetchRegister.rejected]: (state) => {
      state.status = 'error';
      state.userdata = null;
    },
    [fetchAuth.pending]: (state) => {
      state.userdata = null;
      state.status = 'loading';
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.userdata = action.payload;
      state.status = 'loaded';
    },
    [fetchAuth.rejected]: (state) => {
      state.userdata = null;
    },
  },
});

export const { clearStatus, logout } = authSlice.actions;

export default authSlice.reducer;
