import { configureStore } from "@reduxjs/toolkit";
import { wishSlice } from "./slice/WishSlice";

export const store = configureStore({
  reducer: {
    addTofav: wishSlice.reducer,
  },
});
