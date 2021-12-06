import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.value = [action.payload];
    },
    logoutUser: (state) => {
      state.value = null;
    },
  },
});

export const { loginUser, logoutUser } = loginSlice.actions;

export const checkUser = (state) => state.login.value;

export default loginSlice.reducer;
