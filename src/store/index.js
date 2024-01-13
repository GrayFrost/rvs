import { configureStore } from "@reduxjs/toolkit";
import codeReducer from "./code";
import navReducer from "./nav";

export default configureStore({
  reducer: {
    code: codeReducer,
    nav: navReducer,
  },
});
