import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import themeSlice from "./themeSlice";

const rootReducers = combineReducers({
  auth: authSlice,
  theme: themeSlice,
});

export default rootReducers;
