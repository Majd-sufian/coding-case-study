import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "text",
  initialState: {
    value: "",
  },
  reducers: {
    addText: (state, action) => {
      state.value += action.payload;
    },
    clearText: (state) => {
      state.value = "";
    },
  },
});

export const { addText, clearText } = textSlice.actions;

export const selectText = (state) => state.text.value;

export default textSlice.reducer;
