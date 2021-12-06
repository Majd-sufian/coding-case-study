import { createSlice } from "@reduxjs/toolkit";

export const machinesSlice = createSlice({
  name: "machines",
  initialState: {
    data: null,
    coordinations: null,
  },
  reducers: {
    allMachines: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { allMachines } = machinesSlice.actions;

export const getMachines = (state) => state.machines.data;

export default machinesSlice.reducer;
