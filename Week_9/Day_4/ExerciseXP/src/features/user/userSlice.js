import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
} = userSlice.actions;

export default userSlice.reducer;

// Thunk async action
export const fetchUser = () => async (dispatch) => {
  dispatch(fetchUserStart());
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    dispatch(fetchUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};
