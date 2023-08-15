import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  // Thêm các reducer khác ở đây
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
