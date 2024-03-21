import { configureStore } from "@reduxjs/toolkit";
import appConfigSlice from "./appConfigSlice";

const appStore = configureStore({
  reducer: {
    appConfig: appConfigSlice,
  },
});

export default appStore;
