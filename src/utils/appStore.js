import { configureStore } from "@reduxjs/toolkit";
import appConfigSlice from "./appConfigSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    appConfig: appConfigSlice,
    search: searchReducer,
  },
});

export default appStore;
