import { configureStore } from "@reduxjs/toolkit";
import StorerSlice from "../Slices/StoreSlice";
import userSlice from "../Slices/UserSlice";

export const store = configureStore({
  reducer: {
    store: StorerSlice.reducer,
    user: userSlice.reducer,
  },
});
