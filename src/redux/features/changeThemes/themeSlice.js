import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "bright",
    backgroundColorHeader: "#3f51b5",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload[0];
      state.backgroundColor = action.payload[1];
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectedTheme = (state) => state.theme.value;
export const themeBackgroundColorHeader = (state) =>
  state.theme.backgroundColor;
export const themeBackgroundColorBody = (state) =>
  state.theme.backgroundColorBody;

export default themeSlice.reducer;
