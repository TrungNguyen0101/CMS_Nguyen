// reducers/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";
interface CounterState {
  collapsed: boolean;
}

const initialState: CounterState = {
  collapsed: false,
};
const menuSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { toggleCollapsed } = menuSlice.actions;
export default menuSlice.reducer;
