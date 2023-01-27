import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  reducers: {
    addWish: (state, action) => {
      state.value.push(action.payload);
    },
    removeWish: (state, action) => {
      let target = state.value.findIndex((i) => i._id === action.payload);

      state.value.splice(target, 1);
    },
  },
});

export const { addWish, removeWish } = wishSlice.actions;
