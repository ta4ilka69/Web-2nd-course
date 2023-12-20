import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: {
    isFetching: false,
  },
  user: {
    token: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching: (state) => {
      state.state.isFetching = true;
    },
    setToken: (state, action) => {
      state.state.isFetching = false;
      state.user.token = action.payload;
    },
    clearToken: (state) => {
      state.user.token = null;
    },
  },
});

export const { setIsFetching, setToken, clearToken } = userSlice.actions;

export default userSlice.reducer;
