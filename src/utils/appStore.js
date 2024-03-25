import { configureStore } from "@reduxjs/toolkit";
import appConfigSlice from "./appConfigSlice";
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice";

const appStore = configureStore({
  reducer: {
    appConfig: appConfigSlice,
    search: searchReducer,
    chat: chatReducer,
  },
});

export default appStore;
